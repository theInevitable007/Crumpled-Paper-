const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var bin1,bin2,bin3;
var ground;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Gnd(400,700,800,20);
	
	paper = new Paper (100,670,15);
	
	bin1 = new Bin(400,680,200,20);
	bin2 = new Bin(300,670,25,100);
	bin3 = new Bin(500,670,25,100);
   //var render = Render.create;
	
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

Engine.update(engine);

     
	 paper.display();
	
	 bin1.display();
	 bin2.display();
	 bin3.display();
	 
	 ground.display();
	 
  drawSprites();
 
 }

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
        console.log("keyPressed")
	}
}
