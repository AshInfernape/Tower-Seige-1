const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var platform1 , platform2 ;
var slingshot;
var polygon;
function setup() {
  createCanvas(1000, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(450,790,950,30);
  platform1 = new Ground(490, 300, 250, 10);
  platform2 = new Ground(800, 200, 200, 10); 
  block1 = new Block(455,275,40,40);
  block2 = new Block(470,235,40,40);
  block3 = new Block(500,275,40,40);
  block4 = new Block(510,235,40,40);
  block5 = new Block(540,275,40,40);
  block6 = new Block(490,195,40,40);
  block7 = new Block(750,175,40,40);
  block8 = new Block(790,175,40,40);
  block9 = new Block(770,135,40,40);
  block10 = new Block(830, 175,40,40);
  block11 = new Block(810, 135,40,40);
  block12 = new Block(790,95,40,40);
  polygon = new Polygon(100,200,30,10);
  slingShot = new SlingShot(polygon.body,{x:230,y:120})
 
 

  Engine.run(engine); 
}
function draw() {
  background("blue");
   Engine.update(engine);  
  textSize(30)
  fill("red")
  text("Drag the block , aim and launch towards the blocks!!",50,30)
  
   ground.display();
  platform1.display();
  platform2.display();
  stroke(1)
 strokeWeight(5)
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
   slingShot.display();
   
  polygon.display();
 

  drawSprites();
}

function mouseDragged(){
Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingShot.fly()
}

