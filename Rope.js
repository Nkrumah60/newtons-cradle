class Rope{
	constructor(bodyA,pointB){
	
	var options ={
		bodyA:bodyA,
		pointB:pointB,
		length:200,
		stiffness:1
		}
	
		this.body = Constraint.create(options);
		this.pointB = pointB;
		World.add(world,this.body);

	

	

/*	var con = Matter.Constraint.create({
		pointA:{x:200,y:20},
		bodyB:bob1,
		pointB:{x:0,y:0},
		length:200,
		stiffness:0.1
	  }); 
	 */
	} 


    //create display() here 

	display(){

		var pointA = this.body.bodyA.position;
		 var pointB = this.pointB

		
		strokeWeight(2);
		line(pointA.x,pointA.y,pointB.x,pointB.y);
		

	}


}
