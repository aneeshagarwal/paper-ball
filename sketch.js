
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(150,550,50,50);
	wall1 = createSprite(750,530,50,120);
	wall2 = createSprite(700,550,275,50);
	wall3 = createSprite(475,530,50,120);
	Ground = new Ground(400,600,800,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



