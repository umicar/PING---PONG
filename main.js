function setup(){
  canvas=createCanvas(700,600);
  canvas.parent('canvas');
  canvas.center();
  video = createCapture(VIDEO);
  video.size(700, 600);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log("Model Loaded");
  }

  function draw(){
    image(video, 0, 0, 700, 600);
  }

  function gotPoses(){
  }