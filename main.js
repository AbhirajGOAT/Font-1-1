nosex=0;
nosey=0;


function setup(){
     video = createCapture(VIDEO);
     video.size(600, 600);
     video.position(90, 285);

     canvas = createCanvas(550, 550);
     canvas.position(300, 100);

     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
}

function gotPoses(results){
     if (results.length > 0) {
          console.log(results);
          nosex = results[0].pose.nose.x;
          nosey = results[0].pose.nose.y;
     }
}
          
function draw(){
    
     background("#8fdfd6");
    
}

function modelLoaded(){
     console.log("Posenet is Initialized");
}