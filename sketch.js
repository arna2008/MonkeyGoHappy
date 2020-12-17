
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, stoneGroup
var score = 0
 var survivalTime = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500,400)
 //creating monkey 
 monkey = createSprite(80, 315, 20, 20);
 monkey.addAnimation("moving", monkey_running);
 monkey.scale = 0.1
  
 ground = createSprite(400, 315, 900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananaGroup = new Group();
  stoneGroup = new Group();
}


function draw() {
 background(225);
  spawnBanana();
  spawnObstacle();
  if(ground.x<0) {
  ground.x = ground.width/2; 
  }
  if(keyDown("space") ) {
  monkey.velocityY = -12
  } 
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);
  

  
 
  
  drawSprites();
 
 stroke("white");
 textSize(20)
 fill("black");
 text("score" + score, 350, 50);
  stroke("black");
  textSize(20)
 fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
 text("survival Time: " + survivalTime, 100, 50);
}
function spawnBanana() {
 if(frameCount % 100 === 0){
  var banana=createSprite(600,100,10,10);
  banana.addImage("banana",bananaImage);
  banana.velocityX=-3;
  banana.scale=0.1
  banana.lifetime=800;
  bananaGroup.add(banana);
  banana.debug=true;
 }
}
function spawnObstacle(){
  if(frameCount % 300 === 0){
  var stone=createSprite(600,280,10,10);
  stone.addImage("stone",obstaceImage);
  stone.velocityX=-3
  stone.scale=0.2;
  stone.lifetime=800;
  stoneGroup.add(stone);
}
}