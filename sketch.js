var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;
var hand;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

		
}


function draw() {
  background(bgImg);

  drawSprites();

  fairy.velocityX = 0;
  fairy.velocityY = 0;
  
  if(keyDown("right")){
fairy.velocityX = 5;
  }

  if(keyDown("left")){
	fairy.velocityX = -5;
	  }
	
  if(keyDown("down")){
	star.velocityY = 5;
	  Matter.Body.setStatic(starBody,false);
	  }
	
	//Hi Vaibhavi, Set the x and y position of the sprite "star" same as the x and y position of the starBody by writing the below code
        star.x = starBody.position.x; 
	star.y = starBody.position.y;

	  if(star.position.y > 485){
         star.velocityY = 0;
          Matter.Body.setStatic(starBody,true);
	  }

}

function keyPressed() {

	//if(){}
	//write code here
}
