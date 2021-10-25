var currentkey = '1';
var counter = 0;
var bgc;

function setup() {
createCanvas(600, 600);
background(0,50);
smooth();
bgc = color(255);
}

function draw() {

// triggering the clear_print function
if(keyIsPressed === true) {
clear_print();
}
// triggering the newkeychoice
if(mouseIsPressed) {
  drawChoice();
}

 //if (frameCount < 2000 ) {
//  saveFrame("images/face-######.png");
//  } else {
  //  exit();
  }



function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function


 // key global variable contains whatever key was last pressed
 var currentkey = key;

switch(currentkey) {
case '1':
  console.log("1");  // candy cane line
  drawline1(color((255),random(mouseY), random(mouseX)), mouseX, mouseY, pmouseX, pmouseY);
  break;


case '2':
  console.log("2");  // blue border squares line
  drawSquare(color(0,random(0,100),255), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '3':
  console.log("3");  // grey arc
 drawArc();
  break;
case '4':
  console.log("4");  // fat purple tornado
  drawShape();
  break;
case '5':
    console.log("5");
   drawline2(color(255));
      break;
case '6':
    console.log("6");
    drawBlur(color(0,random(0,100),255), mouseX, mouseY, pmouseX, pmouseY);
    break;
case '7':
  console.log("7");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
  break;
default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}


function drawEllipse(){
    stroke(random(0,255),255,255);
    fill(counter++,255,255);
    ellipse(mouseX,mouseY,random(50),50);
if (counter > height) {
  counter = 20;
} else {
  counter+=20;
}
}
 function drawArc(){

    stroke(100,100,100);
    noFill();
  //arc(mouseX, mouseY, 20, 20, 20, PI+1.2);

 arc(mouseX, mouseY, 30, 20, 1, PI);
  //arc(mouseX, mouseY, 15, 60, 5, PI-2);


 }
function drawline1( k, lx, ly,  px, py) {
 strokeWeight(5);
  stroke(k);
  line(lx, ly, px, py);
}

function drawline2( k, lx, ly,  px, py) {
 filter(INVERT);
}


function drawSquare( k,  lx, ly, px, py) {
 strokeWeight(5);
  stroke(k);
  rect(lx, ly, 25, 25);
}

function drawBlur( k,  lx, ly, px, py) {
    filter(BLUR, 3);


}
function drawShape() {
  push();
  translate(mouseX, mouseY);
  rotate(radians(counter));
  scale(.2);
  drawEllipse();
  pop();
  push();
  translate(mouseX, mouseY);
  rotate(radians(counter));
  scale(.4);
  drawEllipse();
  pop();

  counter++;
}

function eraser( k, lx, ly, sz) {
  stroke(k);
  setup();
}


function clear_print() {

// these 2 options let you choose between clearing the background
// and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
     background(0,50);
  } else if (key == 'p' || key == 'P') {
    // saveFrame("x_xxx_####.png");
     //this will save the name as the intials and a random counting number.
     // it will always be larger in value then the last one.
     delay(500);
  }

}
