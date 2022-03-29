const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;



function preload(){
  
}

function setup() {
  createCanvas(500,700);
  
  engine = Engine.create();
  world = engine.world;

  
}

function draw() {
  background(240);
  Engine.update(engine);

  
  
  drawSprites();
}

