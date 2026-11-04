// this two functions were promoted to be global
// to make firefoxs jit happy - URGH
function clamp(x, min, max) {
    if(x < min) return min;
    if(x > max) return max-1;
    return x;
}

function createEmtpyImage(canvas, ctx) {
    var imgData = ctx.createImageData(canvas.width, canvas.height);
    var data = imgData.data;
    
    for(var k=0; k<canvas.width*canvas.height*4; k++) {
       data[k] = 255;
    }
    
    return imgData;
}

max = 300;

var y = new Float32Array(1);
var i = new Int32Array(y.buffer);
function InvSqrt(number) {
   var x2 = number * 0.5;
   y[0] = number;
   i[0] = 0x5f3759df - (i[0] >> 1);
   var number2 = y[0];
   return number2 * (1.5 - (x2 * number2 * number2));
  }

// this is basically where the magic happens
function drawLight(imgData, canvas, ctx, normals, textureData, shiny, specularity, lx, ly, lz) {
    //shiny += Math.random();
    //lx += Math.round(Math.random()*3);
    //ly += Math.round(Math.random()*3);
    //lz += Math.round(Math.random())*2;
    //ly += Math.random()*2;
    //lz += Math.random()*4-2;
    //specularity += Math.round(Math.random());

    //var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;
    
    var i = 0;
    var ni = 0;
    var dx = 0, dy = 0, dz = 0;
    /*for(var y = 0; y < canvas.height; y++) {
        for(var x = 0; x < canvas.width; x++) {*/
    
    //for(var y = Math.max(0, ly-max); y < Math.min(canvas.height, ly+max); y++) {
    //    for(var x = Math.max(0, lx-max); x < Math.min(canvas.width, lx+max); x++) {
    
    for(var y =0; y < 256; y++) {
        for(var x = 0; x < 256; x++) {
            // i += 4;
              //  ni += 3;
        
             i = x*4 + y*canvas.width*4;
             ni = x*3 + y*canvas.width*3;
             
                // get surface normal
                nx = normals[ni];
                ny = normals[ni+1];
                nz = normals[ni+2];

                if(shiny > 0){ //
                    // calculate the light direction vector
                    dx = lx - x;
                    dy = ly - y;
                    dz = lz;

                    // normalize it
                    magInv = 1.0/Math.sqrt(dx*dx + dy*dy + dz*dz);
                    //magInv = InvSqrt(dx*dx + dy*dy + dz*dz);
                    //magInv = InvSqrt(dx*dx + dy*dy + 100);
                    dx *= magInv;
                    dy *= magInv;
                    dz *= magInv;
                    
                }

                // take the dot product of the direction and the normal
                // to get the amount of specularity
                var dot = dx*nx + dy*ny + dz*nz;
                
                
                var spec = Math.pow(dot, 20)*specularity;
                spec += Math.pow(dot, 400)*shiny;
                var intensity = spec + 1;

                //for(var channel = 0; channel < 3; channel++) {
                    //data[i+channel] = Math.round(clamp(textureData[i+channel]*intensity, 0, 255));
                    //data[i+channel] = textureData[i+channel]*intensity;
                //}
                
                data[i] = textureData[i] * (1/Math.sqrt(Math.sqrt(Math.sqrt(intensity))));
                data[i+1] = textureData[i+1] * (1/(intensity*intensity));
                data[i+2] = textureData[i+2] * (1/(intensity*intensity));
                
               
            }
    }
    ctx.putImageData(imgData, 0, 0);
}


function normalmap(canvasId, texture, normalmap, specularity, shiny) {

    var canvas = document.getElementById(canvasId);
    if(canvas.getContext == undefined) {
        document.write('unsupported browser');
        return;
    }

    var ctx = canvas.getContext('2d');

    var normalData = null;
    var textureData = null;

    function getDataFromImage(img) {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, img.width, img.height);
        ctx.drawImage(img, 0 ,0);
        return ctx.getImageData(0, 0, img.width, img.height);
    }

    function loadImage(src, callback) {
        var img = document.createElement('img');
        img.onload = callback;
        img.src = src;
        return img;
    }

    var normals = [];
    var textureData = null;
    var imgData = null;
    var normalsImg = loadImage(normalmap, function() {
        var data = getDataFromImage(normalsImg).data;
        // precalculate the normals
        for(var i = 0; i < canvas.height*canvas.width*4; i+=4) {
            var nx = data[i];
            // flip the y value
            var ny = 255-data[i+1];
            var nz = data[i+2];

            // normalize
            var magInv = 1.0/Math.sqrt(nx*nx + ny*ny + nz*nz);
            nx *= magInv;
            ny *= magInv;
            nz *= magInv;

            normals.push(nx);
            normals.push(ny);
            normals.push(nz);
        }
        
        
        imgData = createEmtpyImage(canvas, ctx);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var textureImg = loadImage(texture, function() {
            textureData = getDataFromImage(textureImg).data;
            main();
        });

    });

    var yy = 1;
    
    function main() {
        var rect = canvas.getBoundingClientRect();
        var posX;
        var posY;
        canvas.onmousemove = function(e) {
            posX = e.clientX+Math.round(yy/2);
            posY = e.clientY+Math.round(yy/2);
        }
        
        function draw() {
            yy += Math.sqrt(Math.sqrt(Math.sqrt(yy)));
           // drawLight(imgData, canvas, ctx, normals, textureData, shiny, specularity, 700+Math.round(yy/2), 700+Math.round(yy/2), yy);
            
            drawLight(imgData, canvas, ctx, normals, textureData, 10000.0, 0.1, 200+Math.round(yy/2), 200+Math.round(yy/2), yy);
            //drawLight(imgData, canvas, ctx, normals, textureData, shiny, specularity, posX, posY, yy);
             setTimeout(function() { draw();}, 2);
        }
        
        draw();       
    }
}