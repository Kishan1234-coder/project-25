
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
var engine,world ;
var dustbinobj;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800,700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     ground = new Ground(400,600,800,20);
     ball = new Ball(100,100,20);
     dustbinobj = new dustbin(500,500);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  ball.display();
  ground.display();
  dustbinobj.display();

  drawSprites();
 
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:45,y:-45});
  }
}




