var teatimeHSt=0;
var teatimeHEnd=1;
var teatimeMSt=0;
var teatimeMEnd=1;
var teatimeMlSt=0;
var teatimeMlENd=1;

var bgcolor;
var fgcolor;

var bgnightc= [20]
var bgdayc= [50,50,200]
var fgnightc= [50,0,75]
var fgdayc= [250,180,0]


function setup() {
  let h= hour();
   if(h >= 19 || h<=6){
bgcolor=bgnightc;
fgcolor=fgnightc;
   console.log("its 7pm");
 }else{
   bgcolor=bgdayc;
   fgcolor=fgdayc;
   }

  createCanvas(500,500);
  background(bgcolor);
//  fill(255);
   angleMode(DEGREES);
}

function draw() {
 //background(bgcolor);
//fill(225);



stroke(180,160,250);
strokeWeight(3);
  let h= hour();
  let mh=map(h,0,23,0, width);
  ellipse(mh, 0, 70,70);
  ellipse(0, mh, 70,70);
  push();
translate(width, height);
rotate(180);
ellipse(mh, 0, 70,70);
ellipse(0, mh, 70,70);
pop();



//background(50);
 stroke(180,160,250);
 strokeWeight(3);
 //noFill();
 push();
 translate(width/2, height/2);
 scale(sin(frameCount*.5)*8.5);
  //scale(second);
 makeFace();
 pop();

 function makeFace() {
    ellipse(0, 0, 40, 40);
}

             // value, rawlow, rawhigh, mlow, mhigh

  let min = minute();
  let mm1 = map(min, 0, 59, 0, width);
  let mm2 = map(min, 0, 59, 0, width);
//let mm3 = map(min, 59, 0, width, 0);
  // let mm4 = map(min, 0, 59, 0, width);
  fill(255);
  ellipse(mm1, height/2, 20, 20);  ellipse(mm1-25, height/2, 15, 15); ellipse(mm1-50, height/2, 10, 10);
  ellipse(width/2, mm2, 20, 20); ellipse(width/2, mm2-25, 15, 15); ellipse(width/2, mm2-50, 10, 10);
  translate(width,height);
rotate(180);
ellipse(mm1, height/2, 20, 20); ellipse(mm1-25, height/2, 15, 15); ellipse(mm1-50, height/2, 10, 10);
ellipse(width/2, mm2, 20, 20); ellipse(width/2, mm2-25, 15, 15); ellipse(width/2, mm2-50, 10, 10);
  // ellipse(width/2, mm2, 20, 20);


  let ml = millis();
  push();
  translate(width/2, height/2);
  let m1 = map(ml, 0, 269, 270,360);
  rotate(m1);
  rect(0, 0, 180, 10,200); // Larger rectangle is rotating in degrees
  pop();


//4 flowers at the corners

  fill(225);
  let s = second();
  push();
  translate(width, height);
  let m2 = map(s, 0, 59, 0,360);
  rotate(m2-90);
  rect(0, 0, 150, 10,200); //bottom right
  rect(s/5,width/2,10,10);
  pop();

  let s2a = second();
  push();
  translate(0,0);
  let m2a = map(s2a, 0, 59, 0,360);
  rotate(m2a-90);
  rect(0, 0, 150, 10,200); // upper left
  rect(s/5,width/2,10,10);
  pop();

  let s2b = second();
  push();
  translate(500,0);
  let m2b = map(s2b, 0, 59, 0,360);
  rotate(m2a-90);
  rect(0, 0, 150, 10,200);
  rect(s/5,width/2,10,10); // upper right
  pop();

  let s2c = second();
  push();
  translate(0,500);
  let m2c = map(s2c, 0, 59, 0,360);
  rotate(m2a-90);
  rect(0, 0, 150, 10,200); // bottom left
  rect(s/5,width/2,10,10);
  pop();

  let m3 = map(s, 0, 59, 0,255);
  fill(m3);
  rect(0, 0, width, 10);
  rect(0, height-10, width, 100);
  rect(width-10, 0, 10, height);
  rect(0, 0, 10, height);

// makewheel();



//rect(s,width/2,60,10);

 console.log(s);


     console.log(mh);
}

// function makewheel(){
//   fill(255);
//   push();
//   translate(width/2,height/2);
//   rotate(0);
//   rect(0,0,100,5);
//   pop();
//
// }
