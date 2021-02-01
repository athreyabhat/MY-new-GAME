var canvas, backgroundImage;
var astronaut,astronautImg;
var bg
var obstacle1,obstacle2,obstacle3,obstacle4,obstacle5;
var bullet,bulletImg
var gameState=0;

function preload(){
astronautImg=loadImage("Images/astronaut.png");
backgroundImage=loadImage("Images/background.jpg");
obstacle1=loadImage("Images/alien_1-removebg-preview.png")
obstacle2=loadImage("Images/alien_2-removebg-preview.png")
obstacle3=loadImage("Images/alien_3.png")
obstacle4=loadImage("Images/asteroid.png");
obstacle5=loadImage("Images/asteroid_2.png");
bulletImg=loadImage("Images/Fireball.png");
}

function setup(){
        
  createCanvas(1200,600);
  bg=createSprite(600,300,1400,20);
bg.addImage(backgroundImage);
bg.velocityX=-2;
astronaut=createSprite(150,300,50,50);
astronaut.addImage(astronautImg);
astronaut.scale=0.3;

obstaclesGroup=new Group();
bulletGroup=new Group();
}

function draw(){

background("Black")
if(gameState===0){
spawnAsteroids();
spawnObstacles();
if(bg.x<100){
bg.x=900;//bg.width/2;
}
if(keyDown("UP_ARROW")){
astronaut.y=astronaut.y-2;

}
if(keyDown("DOWN_ARROW")){
astronaut.y=astronaut.y+2;
}
if(keyDown("SPACE")){
Lightball();

}
/*if(astronaut.isTouching(obstaclesGroup)){
gameState=1;
}
if(bulletGroup.isTouching(obstaclesGroup)){
  obstaclesGroup.destroyEach();
  
  }*/
  drawSprites();
}

/*if(gameState=1){
astronaut.destroy();


}*/


}
function spawnObstacles() {
  if(frameCount % 201 === 0) {
    var obstacle = createSprite(1200,300,10,40);
   
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
        if(frameCount % 201 === 0) {
          var asteroid = createSprite(1200,300,10,40);
         
          asteroid.velocityX =-6;// (-6 + 3*score/100);
          
         
          var rand = Math.round(random(1,2));
          switch(rand) {
            case 1: asteroid.addImage(obstacle4);
                    break;
            case 2: asteroid.addImage(obstacle5);
                    break;
            default: break;
          }
        }
}
function Lightball(){
var bullet=createSprite(200,300,50,50);
bullet.scale=0.2;
bullet.addImage(bulletImg);
bullet.velocityX=5;
bullet.y=astronaut.y+20;
bulletGroup.add(bullet);
}
