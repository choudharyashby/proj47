var tank; 
var halloweennight; 
var ghostGroup,ghostImg; 
var bulletGroup,bulletImg;

var score = 0;

function preload () {
  tankImg = loadImage("tank.png");
  ghostImg = loadImage("ghost.png");
  halloweenImg = loadImage("halloweennight.jpg");
  bulletImg = loadImage("bullet.png");
  
}

function setup() {
  
  createCanvas(1000,600);
  
  halloweennight = createSprite (400,10,100,20);
  halloweennight.addImage(halloweenImg);
  halloweennight.x = width/2;
  halloweennight.scale = 1.9;  

  tank = createSprite(100, 500, 50, 50);
  tank.addImage(tankImg)
  tank.scale = 0.3;
  

  invisibleGround = createSprite(400,310,1600,10);
  invisibleGround.visible = false ;

  invisibleGround2 = createSprite(5,310,10,1600);
  invisibleGround2.visible = false ;

  invisibleGround3 = createSprite(1000,310,10,1600);
  invisibleGround3.visible = false ;


  ghostGroup = new Group();
  bulletGroup = new Group();

  score = 0

}

function draw() {
  background(255,255,255);  


   if(keyDown("space")){
    spawnbullet();
}
  if(keyDown("left_arrow")){
    tank.velocityX = -5;
  }

  if(keyDown("right_arrow")){
    tank.velocityX = 5;
  }

  if(keyDown("s")){
    tank.velocityX = 0;
  }

     

  if(ghostGroup.isTouching(bulletGroup)){
    ghostGroup.destroyEach();
    bulletGroup.destroyEach();
    score = score + 5;


  }
  
  spawnghost();

   tank.collide(invisibleGround);
   tank.collide(invisibleGround2);
   tank.collide(invisibleGround3);



   
   drawSprites();

    textSize(20);
    stroke(3);
    fill("orange")
    text("ghost"+ score, 270,50);
  
    
  }

  function spawnghost () {
    if(frameCount% 110 === 0){
      var ghost = createSprite(900,500,40,40);
      ghost.addImage(ghostImg);
      ghost.setCollider("rectangle",0,0,140,140);
      ghost.velocityX = -3
      ghost.scale = 0.15;      
      //ghost.debug = true;
      ghost.lifetime = 200;
      ghostGroup.add(ghost);
      

   
    }
  }

  function spawnbullet () {
      var bullet= createSprite(100,480,40,40)
      bullet.addImage(bulletImg);
      bullet.setCollider("rectangle",0,0,140,140);
      bullet.velocityX = 6
      bullet.scale = 0.15;      
      bullet.x=tank.x;
      //bullet.debug = true;
      bullet.lifetime = 200;
      bulletGroup.add(bullet);
      

   
    }
  

