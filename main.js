music1="";
music2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    music1= loadSound("music.mp3");
    music2= loadSound("music2.mp3");
}

function setup(){
    canvas= createCanvas(500,400);
    canvas.center();
    canvas.position(500,300);

    video= createCapture(VIDEO);
    video.hide();

    posenet= ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotResults);
}

function draw(){
    image(video, 0, 0, 500, 400);
}

function modelLoaded(){
    console.log("Modal Loaded!")
}

function gotResults(results){
    if(results.length>0){
        leftWristX= results[0].pose.leftWrist.x;
        leftWristY= results[0].pose.leftWrist.y;
        rightWristX= results[0].pose.rightWrist.x;
        rightWristY= results[0].pose.rightWrist.y;


        console.log("Left Wrist X- "+ leftWristX);
        console.log("Left Wrist Y- "+ leftWristY);
        console.log("Right Wrist X- "+ rightWristX);
        console.log("Right Wrist Y- "+ rightWristY);
    }
}