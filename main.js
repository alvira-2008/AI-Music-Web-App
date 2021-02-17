song = "";
music = "";

leftWristX = 0;
leftWristY = 0;
leftX = 0;
leftY = 0;

rightWristX = 0;
rightWristY = 0;
rightX = 0;
rightY = 0;


function preload(){
    song = loadSound("About Love.mp3");
    music = loadSound("Wolves.mp3");
}

function setup(){
    canvas = createCanvas(600, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 600, 450);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        leftX = leftWristX.toFixed(3);
        leftY = leftWristY.toFixed(3);
        console.log("Left Wrist X = " + leftX + " Left Wrist Y = " + leftY);

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        rightX = rightWristX.toFixed(3);
        rightY = rightWristY.toFixed(3);
        console.log("Right Wrist X = " + rightX + " Right Wrist Y = " + rightY);
    }
}