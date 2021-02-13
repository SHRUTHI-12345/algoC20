var fixedbox,movingbox;



function setup() {
  createCanvas(800,400);
  fixedbox=createSprite(400,200,50,50);
  movingbox=createSprite(600,200,50,100);
  fixedbox.shapeColor="red";
  movingbox.shapeColor="red"
}

function draw() {
  background("pink");  

  movingbox.x=World.mouseX;
  movingbox.y=World.mouseY;

  if(movingbox.x - fixedbox.x < movingbox.width/2 + fixedbox.width/2  &&
    fixedbox.x -movingbox.x < movingbox.width/2 + fixedbox.width/2  &&
  movingbox.y-fixedbox.y < movingbox.height/2 + fixedbox.height/2 &&
  fixedbox.y-movingbox.y < movingbox.height/2 + fixedbox.height/2)
  {
    fixedbox.shapeColor="blue";
    movingbox.shapeColor="blue"
  }

  else
  {
    fixedbox.shapeColor="red";
    movingbox.shapeColor="red"
  }

  drawSprites()
}