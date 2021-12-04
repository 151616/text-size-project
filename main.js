
nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(25,105)
    canvas = createCanvas(550,500);
    canvas.position(775,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("PoseNet is Initialized!");
}
function draw(){
    input = document.getElementById("text_input").value;
    background("#ADD8E6");
    background("#ADD8E6");
    textSize(difference);
    fill("#00008b");
    text(input,50, 400 );

}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
        console.log("Nose X = "+ nosex +"Nose Y ="+ nosey);
        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);
        console.log("Left Wrist = " + leftwristx + "Right Wrist = " + rightwristx + "Difference = " + difference);
}
}