var Ariane = new Class({
	searchMap:	null,
	pathList:	null,
	aStar:		null,
	scale:		[1,1],
	
	ready:		false,
	chunkSize:  150,
	
	initialize: function(options) {
		this.searchMap	= new SearchMap();
		this.pathList 	= new WaitList();
		this.aStar		= new AStar(this.searchMap);
		this.ready		= true;
	},
	
	// MAIN METHODS
	update: function() {
		var path;
		var nbPath = this.pathList.getSize();
		var chunkSize = this.chunkSize;
		var nbProcessed = 0;
		
		if(!nbPath)
			return;
		
		while(nbProcessed < chunkSize) {
			for(var i=0; i<nbPath; ++i) {
				path = this.pathList.get(i);
				
				if(!path.computed) {
					this.aStar.compute(path);
					nbProcessed += path.priority ;
				} else {
					this.pathList.remove(i);
					nbPath--;
				}
				
				if(nbProcessed>=chunkSize)
					return;
			}
			
			if(!nbProcessed || !nbPath)
				return;
		}
	},
	
	// computes a path from scratch
	findPath: function(path, options) {
		path.reset();
		this.pathList.add(path);
	},
	
	// tries to recompute only part of the path
	recoverPath: function() {
		
	},
	
	// modifies path to reach new end point
	updatePath: function() {
		
	},
	
	smoothPath: function() {
		
	},
	
	resetPath: function(path) {
		path.reset();
	},
	
	setPathPriority: function(path, priority) {
		var priority = Math.min(priority, this.chunkSize/2);
		path.priority = priority;
	},
	
	setPriorityFunction: function(fn) {
		this.pathList.setPriorityFunction(fn);
	},
	
	setEstimationMethod: function(method) {
		this.aStar.setEstimationMethod(method);
	},
	
	setCollisionFunction: function(fn) {
		this.aStar.setCollisionFunction(fn);
	},
	
	setChunkSize: function(nb) {
		this.chunkSize = nb;
	},
	
	setAllowedMoves: function(straight, diag) {
		this.aStar.setAllowedMoves(straight, diag);
	},
	
	setScale: function(scale) {
		this.scale = scale;
	},
	
	// MAP RELATED
	setMapData: function(map) {
		this.searchMap.setData(map);
	},
	
	loadMapFromBmp: function(url) {
		this.ready = false;
		var callback = function(){this.ready = true;}.bind(this);
		this.searchMap.loadFromBmp(url, callback);
	}
	
	
});


/* 
 * SearchMap Data
 * 2d array containing the "price" of each position on the map.
 */

var SearchMap = new Class({
	data:	null,
	size:	[0,0],
	
	setData: function(data) {
		this.data = data;
		
		this.size[0] = data.length;
		this.size[1] = data[0].length;
	},
	
	getCostAt: function(coord) {
		if(coord[0]<0 || coord[0]>=this.size[0])
			return 255;
			
		if(coord[1]<0 || coord[1]>=this.size[1])
			return 255;
		
		return this.data[coord[0]][coord[1]];
	},
	
	modify: function(coord, value) {
		this.data[coord[0]][coord[1]] = value;
	}
});
var Path = new Class({
	start:		null,
	end:		null,
	callback:	null,
	priority:	1,
	
	computed: 	false,
	success:	false,
	cancelled:	false,
	
	data:		null,
	length:		0,
	
	nbMaxIter:	100,
	nbIter:		0,
	
	open:		null,
	close:		null,
	orig:		null,
	fScore:		null,
	gScore:		null,
	hScore:		null,
	bestF:		null,
	bestFScore: 1000000,
	
	initialize: function(start, end, priority, callback) {
		this.start 		= start;
		this.end		= end;
		this.callback	= callback;
		this.priority	= priority;
		
		if(!$defined(this.callback))
			this.callback = $lambda;
		
		this.reset();
	},
	
	reset: function() {
		this.computed 	= false;
		this.success 	= false;
		this.cancelled 	= false;
		
		this.gScore 	= [];
		this.hScore 	= [];
		this.fScore 	= [];
		this.cameFrom 	= [];
		this.data		= [];
		
		this.nbIter = 0;
		this.open 	= new Heap(this.fScore);
		this.close 	= new List();
		this.bestF 	= this.start;
		
		this.open.push(this.start);
		this.gScore[this.start] 	= 0;
		this.hScore[this.start] 	= 0;
		this.fScore[this.start] 	= 1000000;
	},
	
	order: function() {
		if(!this.computed)
			return;
			
		if(this.success)
			var temp = this.end;
		else
			var temp = this.bestF;
			
		while(temp) {
			this.data.push(temp);
			temp = this.cameFrom[temp];
		};
		
		return this.data;
	},
	
	// SETTERS
	setStart: function() {
		
	},
	
	setEnd: function() {
		
	},
	
	setPriority: function(p) {
		this.priority = p;
	}
});
// rename to PathList?
var WaitList = new Class({
	list:	[],
	priorityFunction: null,
	
	initialize: function() {
		// default priority function
		this.priorityFunction = function(pathA, pathB) {return (pathA.priority<pathB.priority)};
	},
	
	add: function(path) {
		this.list.push(path);
		this.sort();
	},
	
	remove: function(num) {
		this.list.splice(num,1);
	},
	
	get: function(num) {
		return this.list[num];
	},
	
	getSize: function() {
		return this.list.length;
	},
	
	sort: function() {
		this.list.sort(this.priorityFunction);
	},
	
	setPriorityFunction: function(fn) {
		this.priorityFunction = fn;
	}
	
	
	
});


var AStar = new Class({
	searchMap:			null,
	collisionFunction:	null,
	estimationMethod:	'euclidean',
	diagonalMoves:		true,
	straightMoves:		false,
	tieBreak:			3.0,
	
	initialize: function(searchMap) {
		this.searchMap = searchMap;
		
		// default collision function
		this.collisionFunction = function() {return false};
	},
	
	compute: function(path) {
		if(path.computed)
			return;
		
		for(var i=0; i<path.priority; ++i) {
			var x = path.open.getTop();
			
			if(!x) {
				path.computed = true;
				path.success = false;
				path.callback();
				return;
			}
			
			if (this._areEquals(x, path.end)) {
				path.computed = true;
				path.success = true;
				path.callback();
				return;
			}
			
			if(path.computed)
				return;
			
			path.open.remove(x);
			path.close.push(x);
			
			var adjs = this._getNeighboursOf(x);
			
			for(var j=0; y = adjs[j]; ++j) {
				if (path.close.contains(y))
					continue;
				
				var cost = this.searchMap.getCostAt(y);
				
				if(cost >= 255)
					continue;
				
				var testGScore = path.gScore[x] + this._estimatedDist(x, y) + cost;
				var testIsBetter = false;
				
				if(!path.open.contains(y)) {
					path.hScore[y] 	= this._estimatedDist(y, path.end) * (1.0+this.tieBreak);
					path.fScore[y] 	= testGScore + path.hScore[y];
					testIsBetter	= true;
					path.open.push(y);
					
				} else if(testGScore < path.gScore[y]) {
					testIsBetter 	= true;
				}
				
				if(testIsBetter) {
					path.cameFrom[y] = x;
					path.gScore[y] 	= testGScore;
					path.fScore[y]	= path.gScore[y] + path.hScore[y];
				}
				
				if(path.fScore[y] < path.bestFScore) {
					path.bestFScore = path.fScore[y];
					path.bestF = y;
				}
			}
			
			path.nbIter++;
		}
	},
	
	_areEquals: function(nodeX, nodeY) {
		return (nodeX[0]==nodeY[0] && nodeX[1]==nodeY[1]);
	},
	
	// inlined
	/*_cost: function(coord) {
		return this.searchMap.getCostAt(coord);
	},*/
	
	_estimatedDist: function(start, end) {
		var dist;
		
		switch(this.estimationMethod) {
			case 'squared_euclidean':
				dist = (start[0]-end[0])*(start[0]-end[0]) + (start[1]-end[1])*(start[1]-end[1]);
				break;
				
			case 'euclidean':
				dist = Math.abs(Math.sqrt((start[0]-end[0])*(start[0]-end[0]) + (start[1]-end[1])*(start[1]-end[1])));
				break;
				
			case 'manhattan':
				dist = Math.abs(start[0]-end[0]) + Math.abs(start[1]-end[1]);
				break;
				
			case 'random':
				dist = Math.random();
				break;
				
			case 'fixed':
				dist = 1;
				break;
		}
		
		return dist;
	},
	
	_getNeighboursOf: function(coord) {
		var adjs = [];
		
		for(var i=-1; i<=1; ++i) {
			for(var j=-1; j<=1; ++j) {
				
				if(!i && !j)
					continue;
				
				if(this.diagonalMoves && (i&&j)) {
					adjs.push([coord[0]+i, coord[1]+j]);
				}
				
				if(this.straightMoves && (!i||!j)) {
					adjs.push([coord[0]+i, coord[1]+j]);
				}
			}
		}
		
		return adjs;
	},
	
	setCollisionFunction: function(fn) {
		this.collisionFunction = fn;
	},
	
	setEstimationMethod: function(method) {
		this.estimationMethod = method;
	},
	
	setAllowedMoves: function(straight, diag) {
		this.straightMoves = straight;
		this.diagonalMoves = diag;
	}
}); 

var List = new Class({
	listHash:	null,
	lastAdded:	null,
	
	initialize: function() {
		this.listHash = $H();
	},
	
	remove: function(obj) {
		delete this.listHash[obj];
	},
	
	push: function(obj) {
		this.listHash[obj] = true;
		this.lastAdded = obj;
	},
	
	contains: function(obj) {
		return this.listHash[obj];
	},
	
	each: function(fn) {
		this.listHash.each(fn);
	}
});
var Heap = new Class({
	Extends: 	List,
	content:	[],
	score:		null,
	
	initialize: function(score) {
		//inlined
		//this.scoreFunction = function(e){return (score[e]);};
		
		this.score = score;
		this.listHash = $H();
	},	
	
	push: function(element) {
		this.listHash[element] = true;
		this.content.push(element);
		this.sinkDown(this.content.length - 1);
	},

	getTop: function() {
		return this.content[0];
	},

	remove: function(node) {
		delete this.listHash[node];
		
		var len = this.content.length;
		// To remove a value, we must search through the array to find
		// it.
		for (var i = 0; i < len; i++) {
			if (this.content[i] == node) {
				var end = this.content.pop();
				
				if (i != len - 1) {
					this.content[i] = end;
					this.bubbleUp(i);
				}
				
				return;
			}
		}
	},
	
	size: function() {
		return this.content.length;
	},

	sinkDown: function(n) {
		// Fetch the element that has to be sunk.
		var element = this.content[n];
		// When at 0, an element can not sink any further.
		while (n > 0) {
			// Compute the parent element's index, and fetch it.
			var parentN = Math.floor((n + 1) / 2) - 1,
			  parent = this.content[parentN];
			// Swap the elements if the parent is greater.
			if (this.score[element] < this.score[parent]) {
			this.content[parentN] = element;
			this.content[n] = parent;
			// Update 'n' to continue at the new position.
			n = parentN;
			}
			// Found a parent that is less, no need to sink any further.
			else {
			break;
			}
		}
	},

  bubbleUp: function(n){
	var length = this.content.length, element = this.content[n], elemScore = this.score[element];
	
	while (true) {
		var child2N = (n + 1) * 2, child1N = child2N - 1;
		var swap = null;
		
		if (child1N < length) {
			var child1 = this.content[child1N], child1Score = this.score[child1];
			if (child1Score < elemScore) 
				swap = child1N;
		}
		
		if (child2N < length) {
			var child2 = this.content[child2N], child2Score = this.score[child2];
			if (child2Score < (swap == null ? elemScore : child1Score)) 
				swap = child2N;
		}
		
		if (swap != null) {
			this.content[n] = this.content[swap];
			this.content[swap] = element;
			n = swap;
		}

		else {
			break;
		}
	}
}
});
