
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball,slingshot;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);
  

	engine = Engine.create();
	world = engine.world;
	 
	ball=new Ball (200,300);
	
	ground = new Ground(600,height,1200,20);
	stand=new Ground(500,500,200,20);
	stand1=new Ground(700,300,200,20);
	box1=new Box(500,460,30,40);
	box2=new Box(501,460,30,40);
	box3=new Box(502,460,30,40);
	box4=new Box(503,460,30,40);
	box5=new Box(504,460,30,40);
	box6=new Box(501,440,30,40);
	box7=new Box(502,440,30,40);
	box8=new Box(503,440,30,40);
	box9=new Box(504,440,30,40);
	box10=new Box(501,420,30,40);
	box11=new Box(502,420,30,40);
	box12=new Box(503,420,30,40);
	box13=new Box(502,400,30,40);
	
  box14=new Box(700,260,30,40);
	box15=new Box(701,260,30,40);
	box16=new Box(702,260,30,40);
	box17=new Box(703,260,30,40);
	box18=new Box(704,260,30,40);
	box19=new Box(701,240,30,40);
	box20=new Box(702,240,30,40);
	box21=new Box(703,240,30,40);
	box22=new Box(702,220,30,40);
	
  slingshot=new SlingShot(ball.body,{x:100,y:450});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(211,211,211);

  stand.display();
  ground.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  
  
  ball.display();
  slingshot.display();
  

  
  



  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingshot.fly();
}
function keyPressed(){
  if(keyCode===32){
    slingshot.attach(ball.body);
  }
}
