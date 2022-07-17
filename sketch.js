var ball
function setup() {
  createCanvas(400,400);
  ball = createSprite(200,200,20,20);
  
}

function draw() 
{
  background(30);

  if (keyIsDown(RIGHT_ARROW)) {
   ball.x = ball.x+5
   background('red')
   
  }
  if (keyIsDown(LEFT_ARROW)) {
    ball.x = ball.x-5
    background('yellow')
  }
  if (keyIsDown(DOWN_ARROW)) {
    ball.y = ball.y+5
   }
   if (keyIsDown(UP_ARROW)) {
     ball.y = ball.y-5
   }



  
  drawSprites();
  }





