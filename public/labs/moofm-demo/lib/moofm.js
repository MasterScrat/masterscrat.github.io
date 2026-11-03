/**
 * MooFm - last.fm API assistant
 *
 * Dependencies: MooTools 1.2
 * 
 * @version			0.2
 * @license			MIT-style license
 * @author			Florian Laurent
 * @copyright		Author
 * @info			http://www.gravytea.com/projects/moofm/
 * @date			02/03/2009
 */ 

MooFm = new Class({
	Implements: [Options],
	
	// proxy loads from address http://ws.audioscrobbler.com/2.0/
	proxy:	'proxy.php?url=',
	url:	'',
	apiKey:	'',
	
	initialize:	function(apiKey) {
		this.apiKey = apiKey;
		
		var fn = 	[	
						['album', 		['addTags', 'getInfo', 'getTags', 'removeTag', 'search']],
						['artist',		['addTags', 'getEvents', 'getInfo', 'getSimilar', 'getTags', 'getTopAlbums', 'getTopFans', 'getTopTags', 'getTopTracks', 'removeTag', 'search', 'share']],
						['auth',		['getMobileSession', 'getSession', 'getToken', 'getWebSession']],
						['event',		['attend', 'getInfo', 'share']],
						['geo',			['getEvents', 'getTopArtists', 'getTopTracks']],
						['group',		['getWeeklyAlbumChart', 'getWeeklyArtistChart', 'getWeeklyChartList', 'getWeeklyTrackChart']],
						['library',		['addAlbum', 'addArtist', 'addTrack', 'getAlbums', 'getArtists', 'getTracks']],
						['playlist',	['addTrack', 'create', 'fetch']],
						['tag',			['getSimilar', 'getTopAlbums', 'getTopArtists', 'getTopTags', 'getTopTracks', 'getWeeklyArtistChart', 'getWeeklyChartList', 'search']],
						['tasteometer', ['compare']],
						['track', 		['addTags', 'ban', 'getInfo', 'getSimilar', 'getTags', 'getTopFans', 'getTopTags', 'love', 'removeTag', 'search', 'share']],
						['user',		['getEvents', 'getFriends', 'getInfo', 'getLovedTracks', 'getNeighbours', 'getPastEvents', 'getPlaylists', 'getRecentTracks', 'getTopAlbums', 'getTopArtists', 'getTopTracks', 'getTopTags', 'getWeeklyAlbumChart', 'getWeeklyArtistChart', 'getWeeklyChartList', 'getWeeklyTrackChart']]
					];
		
		for (var i = 0; i < fn.length; ++i) {
			var scopeName = fn[i][0];
			var scope = this[scopeName] = {};
			var fns = fn[i][1];
			
			for (var j = 0; j < fns.length; ++j) {
				var name = fns[j];
				var method = scopeName+'.'+name;
				
				scope[name] = function(options, callback){
					this[0]._send(this[1], options, callback);
				}.bind([this, method]);
			}
		}
	},
	
	_send:	function(method, options, callback) {
		// Changes (2026): call the last.fm API directly (it now supports CORS) instead of the PHP proxy,
		// which static hosting can't run; start each request from a fresh query string (it used to
		// accumulate the parameters of every previous call); URL-encode parameter values.
		this.url = '';
		this._addParam('format', 'json');
		this._addParam('method', method);
		this._addParam('api_key', this.apiKey);

		for (var name in options)
			this._addParam(name, encodeURIComponent(options[name]));

		var req = new Request({method:'get', 'url':'https://ws.audioscrobbler.com/2.0/?'+this.url});
		req.headers.erase('X-Requested-With'); // custom header would trigger a CORS preflight
		req.addEvent('complete', function(json) {
			callback(JSON.decode(json));
		}.bind(this));
		req.send();
	},
	
	_addParam:	function(name, value) {
		this._append(name+'='+value);
	},
	
	_append:		function(text) {
		if(this.url)	this.url += '&';
		this.url += text;
	}
});


/*
 * Base64 encoding to protect URLs
 * from webtoolkit.info
 */
var Base64 = {
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;
        input = Base64._utf8_encode(input);

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2))
                enc3 = enc4 = 64;
            else if (isNaN(chr3))
                enc4 = 64;

            output = output +
            this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
            this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
        }
        return output;
    },

    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
}