song = "";
music = "";

function preload(){
    song = loadSound("About Love.mp3");
    music = loadSound("Wolves.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
