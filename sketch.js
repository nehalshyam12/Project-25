const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world;
var line1, line2, line3,paper1;
var ground,paperImg;


function preload(){

paperImg = loadImage("Images/paper.png")

}

function setup() {
  
var canvas = createCanvas(1200,500);

engine = Engine.create();
world = engine.world;

line1 = new Dustbin(780,420,10,180);
line2 = new Dustbin(930,420,10,180);
line3 = new Dustbin(855,475,160,10);

paper1 = new Paper(200,420,18);



ground = new Ground(600,490,1200,20);

}

function draw() {
  
  
  background(0);

Engine.update(engine);

paper1.display(paperImg);

line1.display();
line2.display();
line3.display();
  
ground.display();

  }

function keyPressed(){

if(keyCode === UP_ARROW){

  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:60,y:-60});
 
}
}
