const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var rope1,rope2,rope3,rope4,rope5;
var bob1,bob2,bob3,bob4,bob5;


function setup() {
	createCanvas(1600, 600);
	rectMode(CENTER);

	

	engine = Engine.create();
	world = engine.world;



	var roof_options={
		isStatic:true			
	}

	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	bob1 = new Bob(300,450);
	rope1 = new Rope(bob1.body,{x:300,y:100});

	bob2 = new Bob(350,450);
	rope2 = new Rope(bob2.body,{x:350,y:100});

	bob3 = new Bob(400,450);
	rope3 = new Rope(bob3.body,{x:400,y:100});

	bob4 = new Bob(450,450);
	rope4 = new Rope(bob4.body,{x:450,y:100});
	
	bob5 = new Bob(500,450);
	rope5 = new Rope(bob5.body,{x:500,y:100});

	

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  Engine.update(engine);
  


  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

	bob1.display();
	rope1.display();

	bob2.display();
	rope2.display();

	bob3.display();
	rope3.display();

	bob4.display();
	rope4.display();

	bob5.display();
	rope5.display();

	

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.


function keyPressed(){

if(keyCode=== 32)

Matter.Body.applyForce(bob1.body,{x:0,y:0},{x:50,y:0});

}