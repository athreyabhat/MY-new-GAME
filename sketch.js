var canvas, backgroundImage;
var astronaut,astronautImg;
var bg
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var bullet,bulletImg
var gameOver,gameOverImg;
var gameState=0;
var asteroidsGroup;
var score=0;
var life=3;

function preload(){
astronautImg=loadImage("Images/astronaut.png");
backgroundImage=loadImage("Images/background.jpg");
obstacle1=loadImage("Images/alien_1-removebg-preview.png")
obstacle2=loadImage("Images/alien_2-removebg-preview.png")
obstacle3=loadImage("Images/alien_3.png")
obstacle4=loadImage("Images/asteroid.png");
obstacle5=loadImage("Images/asteroid_2.png");
bulletImg=loadImage("Images/Fireball.png");
gameOverImg=loadImage("Images/game over.png");
}

function setup(){
        
  createCanvas(1200,600);
  bg=createSprite(600,300,1400,20);
bg.addImage(backgroundImage);
bg.velocityX=-2;
astronaut=createSprite(150,300,50,50);
astronaut.debug=true;
astronaut.addImage(astronautImg);
astronaut.scale=0.3;


obstaclesGroup=new Group();
asteroidsGroup=new Group();
bulletGroup=new Group();
}

function draw(){


if(gameState===0){
  background("Black");
  
spawnAsteroids();
spawnObstacles();
if(bg.x<200){
bg.x=900;//bg.width/2;
}
if(keyDown("UP_ARROW")){
astronaut.y=astronaut.y-5;

}
if(keyDown("DOWN_ARROW")){
astronaut.y=astronaut.y+5;
}
if(keyDown("SPACE")){
Lightball();

}
if(astronaut.isTouching(obstaclesGroup)){
  
  //gameState=1;
//gameOver.visible=true;
}
if(astronaut.isTouching(asteroidsGroup)){
  //life=life-1;
  //gameState=1;
}

for(var i=0;i<obstaclesGroup.length;i++){
  if(obstaclesGroup.get(i).isTouching(bulletGroup)){
    obstaclesGroup.get(i).destroy();
    bulletGroup.destroyEach();
    score=score+1;
 }
}

  drawSprites();
  textSize(30);
text("Life:"+life,50,100);
textSize(30);
text("Score:"+score,700,100);
}

if(gameState===1){
background("green");

//gameOver=createSprite(600,300,100,100);
//gameOver.scale=0.3;
//gameOver.visible=false;
//gameOver.addImage(gameOverImg);
}


}



function spawnObstacles() {
  if(frameCount % 201 === 0) {
    var obstacle = createSprite(1200,300,10,40);
    obstacle.debug=true;
    obstacle.velocityX =-6;// (-6 + 3*score/100);
    
   
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacle.addImage(obstacle1);
              break;
      case 2: obstacle.addImage(obstacle2);
              break;
      case 3: obstacle.addImage(obstacle3);
              break;
      
      default: break;
    }
    
            
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
 
    obstaclesGroup.add(obstacle);
  }
}
  function spawnAsteroids() {
        if(frameCount % 401 === 0) {
          var asteroid = createSprite(1200,150,10,40);
         asteroid.debug=true;
         asteroid.setCollider("rectangle",0,0,200,200);
          asteroid.velocityX =-6;// (-6 + 3*score/100);
          asteroid.scale=0.7;
         
          var rand = Math.round(random(1,2));
          switch(rand) {
            case 1: asteroid.addImage(obstacle4);
                    break;
            case 2: asteroid.addImage(obstacle5);
                    break;
            default: break;
            
            
          }
          asteroidsGroup.add(asteroid);
        }
}
function Lightball(){
var bullet=createSprite(200,300,50,50);
bullet.debug=true;
bullet.scale=0.2;
bullet.addImage(bulletImg);
bullet.velocityX=5;
bullet.y=astronaut.y+20;
bulletGroup.add(bullet);
}
