var car, policecar;
var carimg, policarimg;




function preload(){
 policarimg = loadAnimation("../imgs/Police/1.png", "../imgs/Police/2.png", "../imgs/Police/3.png");
 carimg = loadImage("../img/Car.png");
}

function setup(){
  createCanvas(400,800)
  car = createSprite(200,200)
  car.addImage(carimg);
}

function draw() {
  background("black")
  drawSprites();
}

