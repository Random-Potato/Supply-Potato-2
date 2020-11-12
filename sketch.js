var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var bValue = true;
var binPart1a, binPart2, binPart3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
	
	options = {
		isStatic: true,
		restitution: 0
	}

	options2 = {
		isStatic: true,
	}

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	binPart1a = Bodies.rectangle(300 , 610 , 20 , 100, options2);
	World.add(world, binPart1a);

	binPart1b = createSprite(300,300,20,100);

	binPart2a = Bodies.rectangle(500 , 610 , 20 , 100, options2);
	World.add(world, binPart2a);

	binPart2b = createSprite(300,300,20,100);

	binPart3a = Bodies.rectangle(400 , 650 , 200 , 20, options2);
	World.add(world, binPart3a);

	binPart3b = createSprite(300,300,200,20);

	packageBody = Bodies.circle(width/2 , 200 , 5 , options);
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  packageSprite.x = packageBody.position.x 
  packageSprite.y = packageBody.position.y 
  
  binPart1b.x = binPart1a.position.x;
  binPart1b.y = binPart1a.position.y;

  binPart2b.x = binPart2a.position.x;
  binPart2b.y = binPart2a.position.y;

  binPart3b.x = binPart3a.position.x;
  binPart3b.y = binPart3a.position.y;
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    //options = {
	//	isStatic: false,
	//	restitution: 0.5
	//}
  }
}