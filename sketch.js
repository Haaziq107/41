var man,thunder;
var drops = [];
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;


function preload(){
    manI=loadImage("images/man.png");
    thunderI=loadImage("images/thunder.png");
}

function setup(){
    canvas=createCanvas(400,600);

    man=createSprite(200,500);
    man.addImage(manI);
    man.scale=0.3;

    for (var i=70; i<drops; i=i+50){
      drops.push(new Drop(random(0,400), (random(0,400))));
    }
    
    thunder=createSprite(200,100);
    thunder.addImage(thunderI);
    thunder.scale=0.3;
}

function draw(){
    background("black");

      for (var i=0; i<Drop.length; i++){
        drops[i].display();
     }

      man.display();
      thunder.display();

    drawSprites();

}   
