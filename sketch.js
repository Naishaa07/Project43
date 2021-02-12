var hr 
var min
var sec
//var scAngle, minAngle, hrAngle;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  
  
}

function draw() {
  background(255,255,255);  
  hr = hour();
  min = minute();
  sec = second();
  //console.log(hr)
  angleMode(DEGREES)
  secAngle=map(sec, 0, 60, 0, 360)
  minAngle=map(min, 0, 60, 0, 360)
  hrAngle=map(hr, 0, 12, 0, 360)
  translate(400,200)
  push();
  rotate(secAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  push();
  rotate(minAngle)
  stroke("green")
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  push();
  rotate(hrAngle)
  stroke("blue")
  strokeWeight(7)
  line(0,0,100,0)
  pop();
  noFill()
  stroke("blue")
arc(400,200,90,90,hrAngle)
 // drawSprites();
}