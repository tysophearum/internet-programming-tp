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

//setInterval: offer on the window and worker interface, repeatedly calls a function 
//  or execute a code within a fixed time delay between each call.
canvasInterval = window.setInterval(() => {
    drawImage(videoelement);
}, 1000 / fps);