noseX=0;
noseY=0;
difference=0;
leftWristX=0
rightWristX=0

function setup(){
    video=createCapture(VIDEO);
    video.size(560,550);

    canvas=createCanvas(560,550);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses)

}

function modelLoaded(){
    console.log("PoseNet Is Initialised!")
}

function gotPoses(){
    
}