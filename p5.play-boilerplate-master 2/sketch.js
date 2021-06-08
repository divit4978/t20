const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine
var world
var ground
var ball


function setup() {
  createCanvas(800,400);
  engine=Engine.create()
  world=engine.world
  var ball_option={
  restitution:3

  }
  var ground_option={
    isStatic:true
  }
  ground=Bodies.rectangle(300,200,100,50,ground_option)
  World.add(world,ground)

  ball=Bodies.circle(305,100,5,ball_option)
  World.add(world,ball)
}

function draw() {
  background(255,255,255);
  Engine.update(engine)
  rectMode(CENTER) 
  rect(ground.position.x,ground.position.y,100,50)
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,5)
  

}