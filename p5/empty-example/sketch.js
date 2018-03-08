
function setup(){
  createCanvas(windowWidth,windowHeight);
  frameRate (10);
}

function draw(){
  background(255,0,0);


  fill(10, 80);
  rect(0, 0, width, height);


strokeWeight(5);
stroke(random(255,20,0));

//horisontal
line(width/3,190,width/3+200,190);
line(width/3,410,width/3+200,410);

  //vertikal
line(width/3,200,width/3,400);
line(width/3+200,200,width/3+200,400);


//horisontal
line(width/3,190,width/3+200,190);
line(width/3,410,width/3+200,410);
//tag
line(width/3,180,width/3+100,100);
line(width/3+200,180,width/3+100,100);
//Skorsten
line(width/3+30,145,width/3+30,100);
line(width/3+50,130,width/3+50,100);


}
function mousePressed() {
  console.log(mouseX, mouseY);
}
