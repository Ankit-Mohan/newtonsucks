
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var options = 
	{
		isStatic : true
	}
	//Create the Bodies Here.
	log1 = new Log(200,200,30,100);
	log2 = new Log(290,200,30,100);
	log3 = new Log(380,200,30,100);
	log4 = new Log(470,200,30,100);
	log5 = new Log(560,200,30,100);
	ball1 = new ball(200,200,30);
	ball2 = new ball(290,200,30);
	ball3 = new ball(380,200,30);
	ball4 = new ball(470,200,30);
	ball5 = new ball(560,200,30);
	rope1 = new chain(log1,ball1);
	rope2 = new chain(log2,ball2);
	rope3 = new chain(log3,ball3);
	rope4 = new chain(log4,ball4);
	rope5 = new chain(log5,ball5);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  fill("grey");
  background(0);
  log1.display();
  log2.display();
  log3.display();
  log4.display();
  log5.display();
  drawSprites();
 
}



