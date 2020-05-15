

function setup(){
  createCanvas(1200,630);
}
  
function draw(){
  background(0)
  rectMode(CENTER);
  strokeWeight(0);

  fill(200);
  
  rect(100,430,100,500);
  rect(250,430,50,700);
  rect(400,430,80,650);
  rect(550,430,90,400);
  rect(700,430,120,540);
  rect(850,430,70,750);
  rect(1000,430,65,800);
  rect(1150,430,85,450);
  ellipseMode(RADIUS);
  
  ellipse(100,205,90,90);
  ellipse(550,250,80,80);
  ellipse(850,100,70,70);
  ellipse(1000,80,60,60);
  triangle(200,100,250,50,300,100);
  triangle(325,150,400,50,475,150);
  triangle(625,200,700,0,775,200);
  triangle(1100,225,1150,100,1200,225);
  
  rect(600,685,1200,460);
 
  fill(200);
  strokeWeight(1);
  stroke(200);
  
  
  
  fill(0);
}
  

