
var videoelement = document.getElementById("videoelement");
let btn = document.getElementById("btn");
let count = 0;

// function pause and play
function pauseVid() {
    count++;
    if(count%2 != 0) {
        videoelement.pause();
    } else {
        videoelement.play();
        count = 0;
    }
}

// function access camera
var streamContraints = {
    audio: false,
    video: true,
};

var myCanvas = document.querySelector('#myCanvas');
var ctx = myCanvas.getContext('2d', { alpha: false });
var canvasInterval = null;
var fps=30;

//if stream found 
function gotStream(stream) {
    videoelement.srcObject = stream 
    videoelement.play()
}

if (videoelement) {
    navigator.mediaDevices
    .getUserMedia(streamContraints)
    .then(gotStream)
    .catch(function (e) {
        if (confirm("An error with camera occured:(" + e.name + ") Do you want to reload?")) {
            location.reload();
        }
    });
}

function drawImage(video) {
    ctx.drawImage(video, 0, 0, myCanvas.width, myCanvas.height);

}

//  var canvas = document.getElementById('myCanvas');
//  var ctx = canvas.getContext('2d');
var canvasProject = document.getElementById('canvasOutput');
var ctxProject = canvasProject.getContext('2d');
function gridVideo(video){
// ctx.drawImage(video, 0, 0, myCanvas.width, myCanvas.height);

ctxProject.drawImage(video, 0, 0, 213, 240, 0, 0, 99, 74);
ctxProject.drawImage(video, 213, 0, 213, 240, 100, 0, 99, 74);
ctxProject.drawImage(video, 426, 0, 213, 240, 200, 0, 100, 74);
ctxProject.drawImage(video, 0, 240, 213, 240, 0, 75, 99, 75);
ctxProject.drawImage(video, 213, 240, 213, 240, 100, 75, 99, 75);
ctxProject.drawImage(video, 426, 240, 213, 240, 200, 75, 100, 75);
// setTimeout(drawImage, 1000/30); //video 30fps
}

//setInterval: offer on the window and worker interface, repeatedly calls a function 
//  or execute a code within a fixed time delay between each call.
canvasInterval = window.setInterval(() => {
    drawImage(videoelement);
    //   gridVideo(videoelement);
    
}, 1000 / fps);

canvasInt = window.setInterval(() => {
    gridVideo(videoelement);
    }, 1000 / fps);
