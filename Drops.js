class Drops{
    constructor (x,y){
        var options={
friction:0.01,
restitution:0.1

        }
this.rain=Bodies.circle(x,y,5,options);
this.r=5;
World.add(world,this.rain);

    }

    display(){
fill("blue");
ellipse(this.rain.position.x,this.rain.position.y,this.r,this.r);
    }

update(){
    if(this.rain.position.y>height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
    }
}

}