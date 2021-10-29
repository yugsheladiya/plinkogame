 var particles;
 var divisionHeight = 300;
 

 var particles = [];
 var plinkos = [];
 var divisions = [];

 Engine = Matter.Engine, 
 World = Matter.World, 
 Events = Matter.Events, 
 Bodies = Matter.Bodies;



function setup() {
  createCanvas(480,800);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create(); 
  world = engine.world;

  for (var j = 40; j <=width; j = j+50)
  {
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <=width-10; j = j+50)
  {
    plinkos.push(new Plinko(j, 175));
  }
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  if(frameCount%60===0){ 
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   } for (var j = 0; j < particles.length; j++) { 

     particles[j].display(); 
  }

  for(var k = 0; k < divisions.length; k++){

    divisions[k].display();

    for (var k= 0; k <=width; k = k+80){
divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
    }
  }

}