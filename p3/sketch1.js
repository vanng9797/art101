var teatimeHSt=16;
var teatimeHEnd=18;
//var teatimeMSt=0;
//var teatimeMEnd=0;

function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
   angleMode(DEGREES);
}

function draw() {
  background(0);
  //fill(225);

  let h= hour();
  let mh=map(h,0,23,0,width);

rect(h,0,20,20);

if(h >= teatimeHSt ){
  text("Its TIME FOR TEA", width/2, height/2);
}
  console.log(h);

  fill(225);
             // value, rawlow, rawhigh, mlow, mhigh
  let min = minute();
  let mm = map(min, 0, 59, 0, width);
  ellipse(mm, height/2, 20, 20);

  //let ml = millis();
  let s = second();
  push();
  translate(width/2, height/2);
  let m2 = map(s, 0, 59, 0,360);
  rotate(m2-90);

  rect(0, 0, 180, 10); // Larger rectangle is rotating in degrees
  pop();

  let m3 = map(s,0, 59,0,255);
  fill(m3);
  rect(0, height-100, width, 100);
 console.log(s);

}
