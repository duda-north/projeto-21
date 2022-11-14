
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var parede1;
var parede2;

function preload()
{

}

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Chao(width/2,690,width,20,"blue");
	var ball_options={
	isStatic: false,
	restitution:0.3,
	friction:0,
	density:1.2
	}

	//Create the Bodies Here.
	ball= Bodies.circle(250,50,50,ball_options);
	World.add(world,ball);
	
	parede1 = new Chao (600,620,20,120,"pink");
	parede2 = new Chao (960,620,20,120,"pink");

	Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
	ground.show();
	parede1.show();
    drawSprites();
	fill("purple")
	ellipse(ball.position.x,ball.position.y,50,50);
	parede2.show();

}

function keyPressed(){
    if(keyCode == UP_ARROW){
		Body.applyForce(ball,ball.position,{x:85,y:-95 })
	}
}

