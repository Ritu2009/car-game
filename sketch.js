var roadimg,road;
var backgroundimg, bg;

function preload(){
  roadimg=loadImage('images/track1.png');
  backgroundimg=loadImage("images/bg.jpg");
  carImg=loadImage("images/car2.png");
}
function setup(){
  createCanvas(displayWidth-20,displayHeight-30);
  
 /* bg=createSprite(displayWidth/2,displayHeight/20);
  bg.addImage(backgroundimg);
  bg.scale=2.0;*/
  
  road=createSprite(displayWidth/4,displayHeight/2+100);
  road.addImage(roadimg);
  road.scale=1.0;
  

  car=createSprite(displayWidth/2, displayHeight-200);
  car.addImage(carImg);
  
  
}
function draw (){
  background(0,255,0);
if(keyDown("up")){
  car.y=car.y-2;
}
if(keyDown("left")){
  car.x=car.x-2;
}
if(keyDown("right")){
  car.x=car.x+2;
}
  camera.y=car.y;
  camera.x=car.x;
  drawSprites();
}