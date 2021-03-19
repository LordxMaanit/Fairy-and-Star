var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var twinkle, twinkleBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	fairyVoice.play();

	

	twinkle = createSprite(650,30);
	twinkle.addImage(starImg);
	twinkle.scale = 0.2;
	engine = Engine.create();
	world = engine.world;
	twinkleBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, twinkleBody);
	Engine.run(engine);
}
function draw() {
  background(bgImg);

  twinkle.x= twinkleBody.position.x 
  twinkle.y= twinkleBody.position.y 

  console.log(twinkle.y);

  if(twinkle.y > 470 && twinkleBody.position.y > 470 ){
  	Matter.Body.setStatic(twinkleBody,true);
  }
  drawSprites();
}

function keyPressed() {
	if(keyCode === RIGHT_ARROW){
           fairy.x = fairy.x + 20;
	}
	
        if(keyCode === LEFT_ARROW){
           fairy.x = fairy.x - 20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(twinkleBody,false); 
	}
}
