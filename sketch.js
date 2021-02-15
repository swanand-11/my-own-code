 var fixedRect,movingRect;
 
 function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200, 200, 50, 50);
  fixedRect.shapeColor= "#f502b4";
  movingRect=createSprite(200,600,50,50)
  movingRect.shapeColor ="#f502b4";
  swanand=createSprite(300,300,40,40)
  swanand.shapeColor = "#ffffff";


}

function draw() {
  background(3, 252, 252); 
  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (isTouching(movingRect,swanand))  {

    movingRect.shapeColor = "black";
    swanand.shapeColor = "black";
  }

  else {
    movingRect.shapeColor ="#f502b4";
    swanand.shapeColor = "#ffffff";
  }
  bounceoff (movingRect,fixedRect) 
  movingRect.velocityY= -2;
  fixedRect.velocityY = 2;
  //bounceoff (movingRectAdjus = )
    
  
  
  drawSprites();
}

