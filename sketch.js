var airplane, airplaneImg;
var background, backgroundImg;
var cargoBox, cargoBoxImg;
var cargoBoxes, cargoBoxesImg
var geese, geeseImg;
var backgroundImg;
var background1Img
var gameState = "wait";
var button, buttonImg
function preload(){
  airplaneImg = loadImage("airplane.png");
  cargoBoxImg = loadImage("cargoBox.png")
  //cargoBoxesImg = loadImage("cargoBoxes.png")
  geeseImg = loadImage("geese.png")
  buttonImg = loadImage("playButton.png")
  backgroundImg = loadImage("background.jpg")
  background1Img = loadImage("background2.jpg")
}
function setup() {
  createCanvas(windowWidth,windowHeight);
  //bg = createSprite(width/2,height/2);
  //bg.addImage(backgroundImg);
airplane = createSprite(250,380)
 airplane.addImage(airplaneImg);
 airplane.scale = 0.08;
airplane.visible = false;

 geese = createSprite(351,145);
 geese.addImage(geeseImg);
geese.scale = 0.04;
geese.visible = false;

  cargoBox = createSprite(500,145);
  cargoBox.addImage(cargoBoxImg);
  cargoBox.scale = 0.04;
cargoBox.visible = false;
  //cargoBoxes = createSprite(40,272);
  //cargoBoxes.addImage(cargoBoxesImg);
  //cargoBoxes.scale = 0.4;
  button = createSprite(width/2-100,height/2,100,100);
  button.addImage(buttonImg);
  button.scale = 0.22;
}

function draw(){
  background("black");
 image(background1Img,0,0,width*3,height);

  if(gameState==="wait"){
fill("blue")
textSize(50);
text("Airplane Game",width/2-250,height/2-150)
//bg.addImage(backgroundImg);
  }
if(mousePressedOver(button) && gameState ==="wait"){
gameState = "play"
}
if(gameState ==="play"){
  button.visible = false;
  airplane.visible = true;
  geese.visible = true;
  cargoBox.visible = true;
  //background(background1Img);
  //bg.addImage(background1Img);
  handlePlayerControls();
}

drawSprites();
}
function handlePlayerControls(){
  if(keyIsDown(RIGHT_ARROW)){
  airplane.x +=3
  }
  if(keyIsDown(UP_ARROW)&& keyIsDown(RIGHT_ARROW)){
    airplane.x +=3
    airplane.y -=3
  }
  if(keyIsDown(DOWN_ARROW)){
    airplane.y -=-3;
  }
}