const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var score = 0;


function preload() {
  polyImg = loadImage("polygon.png");
}


function setup() {
 createCanvas(1300, 600);

 engine = Engine.create();
 world = engine.world;
 Engine.run(engine);

    ground = new Ground();
    stand = new Ground(1040,300,240,20);
    stand1 = new Ground(640,550,240,20);
    
    //stand
    block = new Box(960,280,40,50);
    block1 = new Box(1000,280,40,50);
    block2 = new Box(1040,280,40,50);
    block3 = new Box(1080,280,40,50);
    block4 = new Box(1120,280,40,50);

    block5 = new Box(1000,230,40,50);
    block6 = new Box(1040,230,40,50);
    block7 = new Box(1080,230,40,50);

    block8 = new Box(1040,180,40,50);

   //stand1
    block9 = new Box(560,530,40,50);
    block10 = new Box(600,530,40,50);
    block11 = new Box(640,530,40,50);
    block12 = new Box(680,530,40,50);
    block13 = new Box(720,530,40,50);

    block14 = new Box(600,480,40,50);
    block15 = new Box(640,480,40,50);
    block16 = new Box(680,480,40,50);

    block17 = new Box(640,430,40,50);


    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
 
 
   slingShot = new SlingShot(this.ball,{x:100,y:200})
}
 

function draw() {
 background("grey");

  fill('lavender')
  textSize(35);
  text("Score : "+ score, width-300,50);

  stand.display();
  stand1.display();
  fill('crimson');
  block.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill("cadetblue");
  block5.display();
  block6.display();
  block7.display();
  fill("wheat");
  block8.display();

  fill('crimson');
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill("cadetblue");
  block14.display();
  block15.display();
  block16.display();
  fill("wheat");
  block17.display();
  
  block.score();
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  

imageMode(CENTER);
  image (polyImg, ball.position.x, ball.position.y, 40, 40);
  slingShot.display();
}
  
function mouseDragged(){
   Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
   } 

function mouseReleased(){
   slingShot.fly(); 
    }

    function keyPressed(){
      if(keyCode===32){
         slingShot.attach(this.ball);
      }
  }

    //async function getBackground(){
    //var response = await fetch("http://worldtimeapi.org/timezone/Asia/Tokyo");
    //var responseJSON = await response.json();
    //console.log(responseJSON);
    //var datetime = responseJSON.datetime;
    //console.log(datetime)
    //var hour = datetime.slice(11,13);
    //console.log(hour)

    //if (hour>= 06 && hour<=18) {
    //bg('plum');
    //}
    //else
    //bg("black");
    //}

  
