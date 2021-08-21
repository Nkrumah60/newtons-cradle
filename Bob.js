class Bob{

constructor(x,y){

var options={
restitution:0.3,
friction:0.5,
density:1

}


this.body = Bodies.circle(x,y,20,options);
World.add(world,this.body);
  

}

display(){

var angle = this.body.angle
var pos = this.body.position

push();
translate(pos.x,pos.y);
rotate(angle);
fill("blue");
ellipseMode(CENTER);
ellipseMode(RADIUS)
ellipse(0,0,20,20);
pop();



}




}