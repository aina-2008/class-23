const Engine=Matter.Engine; //namespacing
const World=Matter.World;
const Bodies=Matter.Bodies;


var world,engine,box,ball;

var options={
  isStatic:true
}

function setup() {
  createCanvas(400,400);
  engine=Engine.create();//world
  world=engine.world;
  box=Bodies.rectangle(200,390,400,20,options);
  World.add(world,box);
  
  
}

function draw() {
  background(0); 
  Engine.update(engine) ;
  rectMode(CENTER);
  rect(box.position.x,box.position.y,400,20) 

}


