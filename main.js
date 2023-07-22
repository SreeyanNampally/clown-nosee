nosex = 0;
nosey = 0;

function preload(){
    clown_nose = loadImage("cn.jpeg");
}

function setup(){
canvas = createCanvas(300,250);
canvas.center();
video= createCapture(VIDEO);
video.hide()
posenet= ml5.poseNet(video, modelloaded)
posenet.on("pose",gotposes)
}

function modelloaded(){
console.log("model loaded");
}

function gotposes(results){
console.log(results);
if(results.length>0){
nosex = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
}
}

function draw(){
    background("black");
    image(video, 0, 0, 300, 250)
    image(clown_nose, nosex, nosey, 30, 30)
    
}