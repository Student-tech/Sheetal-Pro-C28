
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1;
var ground1;
var stone1;
var boy, boyp;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10, mango11;
var elastic1;

function preload()
{

   boyp = loadImage("boy.png");
	
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    tree1 = new Tree(width/2+350, height/2, 600, 800);

	ground1 = new Ground(width/2, height/2+390, 1500, 20);

	stone1 = new Stone(width/2-580, height/2+120, 70, 70);

	boy = createSprite(width/2-500, height/2+290, 50, 50);
	boy.addImage("boypng", boyp);
	boy.scale = 0.15;

	mango1 = new Mango(1100,100, 30);
	mango1.scale = 0.3;

	//elastic1 = new Elastic(stone1.body, {x: 250, y: 690});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

  tree1.display();

  ground1.display();

  stone1.display();
  
  drawSprites();

  mango1.display();

  //elastic1.display();
 
}