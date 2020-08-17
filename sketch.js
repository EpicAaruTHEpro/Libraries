var fixedRect, movingRect, orangeRect, redRect, yellowRect;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 50);
  fixedRect.shapeColor = "blue";
  orangeRect = createSprite(100, 200, 50, 50);
  orangeRect.shapeColor = "orange";
  redRect = createSprite(200, 200, 50, 50);
  redRect.shapeColor = "red";
  yellowRect = createSprite(300, 200, 50, 50);
  yellowRect.shapeColor = "yellow";
  movingRect = createSprite(400,100,50,50);
  movingRect.shapeColor = "green";

  movingRect.velocityY = 3;
  fixedRect.velocityY = -2;
}

function draw() {
  background(255,255,255);
  
  // movingRect.y = World.mouseY;
  // movingRect.x = World.mouseX;

  if(isTouching(orangeRect, movingRect)){
    orangeRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else if(isTouching(redRect, movingRect)) {
    redRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }

  else {
    orangeRect.shapeColor = "orange";
    redRect.shapeColor = "red";
    movingRect.shapeColor = "green";
    
  }

  bounceOff(fixedRect, movingRect);
  

  drawSprites();
}