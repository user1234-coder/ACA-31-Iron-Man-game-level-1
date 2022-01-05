
var bg, backgroundImg;

function preload() { 
  //load all game assets
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg)
  bg.scale=1.5 
  iron = createSprite(450,400,400,10)
  iron.addImage(ironImage)
  iron.scale = 0.3

  ground =createSprite(430,585,900,10)
  ground.visible=false 
//sir do we need the ground for right left and ceiling also?

}

function draw() {
  
  

  if(keyDown("right")){
    iron.velocityX = +5;
    
  }

  if(keyDown("left")){
    iron.velocityX = -5;
    
  }
 
  if(keyDown("up")){
    iron.velocityY = -10;
    
  }

    iron.velocityY = iron.velocityY + 0.5
    iron.collide(ground)
    //sir iron is not colliding
drawSprites();
   
}

