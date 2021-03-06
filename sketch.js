var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	bgImg = loadImage("starNight.png");
	//load animation for fairy here
	fImg=loadAnimation("fairyImage1.png","fairyImage2.png");
	
}

function setup() {
	createCanvas(800, 750);

	
    
	//create fairy sprite and add animation for fairy
	fairy= createSprite(70,550);
	fairy.addAnimation("fly",fImg);
	fairy.scale=0.2;


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

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

   //write code to stop star in the hand of fairy
   if(star.position.y>500 && starBody.position.y>500){
	Matter.Body.setStatic(starBody,true)
}

  //writw code to move fairy left and right
	if(keyDown(RIGHT_ARROW)){
		fairy.x=fairy.x+40;
	}
	else if(keyDown(LEFT_ARROW)){
		fairy.x= fairy.x-100;
	}

 

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
	
	
}
