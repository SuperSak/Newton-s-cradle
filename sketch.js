const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =  Matter.Constraint
var bo1, bo2, bo3, bo4, bo5, r1, r2, r3, r4, r5, g1, g2, g3, g3, g4, g5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	g1=new Ground(80,100,160,100)
	g2=new Ground(240,100,160,100)
	g3=new Ground(400, 100,160,100)
	g4=new Ground(560, 100,160,100)
	g5=new Ground(720, 100,160,100)
	bo1=new Bob(80, 400, 80)
	bo2=new Bob(240, 425, 80)
	bo3=new Bob(400, 425, 80)
	bo4=new Bob(560, 425, 80)
	bo5=new Bob(720, 425, 80)
	r1 = new Rope(bo1.body,g1.body,0,300)
	r2 = new Rope(bo2.body,g2.body,0,300)
	r3 = new Rope(bo3.body,g3.body,0,300)
	r4 = new Rope(bo4.body,g4.body,0,300)
	r5 = new Rope(bo5.body,g5.body,0,300)
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  g1.display()
  g2.display()
  g3.display()
  g4.display()
  g5.display()
  bo1.display()
  bo2.display()
  bo3.display()
  bo4.display()
  bo5.display()
  r1.display()
  r2.display()
  r3.display()
  r4.display()
  r5.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bo1.body, bo1.body.position, {x:-100,y:-100})
	}
}