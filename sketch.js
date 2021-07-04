const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies

var engine, world;
 var drops= [];
var maxDrops= 100;

var thunderFrame;

function preload(){
    thunder1=loadImage("thunderbolt/1.png");
    thunder2=loadImage("thunderbolt/2.png");
    thunder3=loadImage("thunderbolt/3.png");
    thunder4 =loadImage("thunderbolt/4.png");
}

function setup(){

createCanvas (400,600);
engine=Engine.create();
world=engine.world;

if(frameCount % 150===0){
for(var i =0; i<maxDrops; i++){

drops.push(new Drops(random(0,400) ,random (0,400)))
}
}

umbrella=new Umbrella(200,450)
    
}

function draw(){
    background (0)
  Engine.update(engine);
    
  for(var i=0;i<maxDrops;i++){
    drops[i].display();
    drops[i].update();
  }
umbrella.display();

var rand=Math.round(random(1,4));
if(frameCount% 80===0){
  thunderFrame=frameCount;
thunder=createSprite(random(10,370),random(10,30),10,10);
switch(rand){
  case 1 : thunder.addImage(thunder1);
  break;
  case 1 : thunder.addImage(thunder1);
  break;
  case 1 : thunder.addImage(thunder1);
  break;
  case 1 : thunder.addImage(thunder1);
  break;
default: break 
}
thunder.scale=0.3;
}

if(thunderFrame+10===frameCount && thunder){
thunder.destroy();
}


    drawSprites();
}   

