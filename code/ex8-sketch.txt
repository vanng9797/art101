var at;
var mn;
var mk;
var vn;

var blob;

var nameList = ["vn", "mk", "at", "mn"];
var jsonList = [0,0,0];

var whichJ=0;

 var sx = 0;
 var sy = 0;


function preload() {
  jsonList[0] = loadJSON("vn.json");
  jsonList[1] = loadJSON("mk.json");
  jsonList[2] = loadJSON("at.json");
  jsonList[3] = loadJSON("mn.json");

}

function setup() {
   createCanvas(500,400);
   background(0);
    rectMode(CENTER);

blob = jsonList[whichJ];
     // this shows the whole blob json data package
   console.log(blob);
   noStroke();

}



function draw() {
  background(200);

  updateToon(blob.toons[0]);  // Hobi
  updateToon(blob.toons[1]);  // Suga
  updateToon(blob.toons[2]); // Kookie

  drawWhoItIS();
}

function keyPressed() {
  if ( key == ' ') {
      console.log("SPACE");

   // if (whichJ === 0) { //sd  //Toggle
   //   whichJ = 1;
   //   blob = jsonList[whichJ];
   // } else { // stu
   //   whichJ = 0;
   //   blob = jsonList[whichJ];
   // }

   if (whichJ === 0) { //vn
     whichJ = 1;
     blob = jsonList[whichJ];
   } else if (whichJ === 1)   { // mk
     whichJ = 2;
     blob = jsonList[whichJ];
   } else if (whichJ === 2)   { // at
     whichJ = 3;
     blob = jsonList[whichJ];
   } else {
     whichJ = 0;  // mn
     blob = jsonList[whichJ];
   }
 }

   console.log(whichJ);
 }

 //and how to draw whos data it is
 function drawWhoItIS() {
   var name = nameList[whichJ];
   fill(100);
   rect(0,0,80,60);
   fill(255);
   text(name,10,20);

 }
 // end


function updateToon(obj) {

      push();

      if ( int(random(10)) > 8) {
       obj.nextX = int(random(obj.moveX.length));
       obj.nextY = int(random(obj.moveY.length));
      }

      obj.posX += obj.moveX[obj.nextX];
      obj.posY += obj.moveY[obj.nextY];

      console.log(obj.posX);

      if ( int(random(10)) > 8) {
       obj.nextRot=int(random(obj.moveRotation.length));
      }

      obj.rotation += obj.moveRotation[obj.nextRot];


       if (obj.posX > width) {
         obj.posX = 0;
       }

       if (obj.posX < 0) {
         obj.posX = width;
       }

       if (obj.posY > height) {
         obj.posY = 0;
       }

       if (obj.posY < 0) {
         obj.posY = height;
       }

       drawToon(obj);

      pop();


}



function drawToon( obj) {
    //  console.log(obj.posX[s]);
var x;
  push();
        //angleMode(DEGREES);
        //rotation
      translate(obj.posX , obj.posY);
          rotate(obj.rotation/5500);
        //hat
        // fill(obj.r,obj.g,obj.b);
        // rect(10,5,obj.torso,obj.torso);
         // head
        fill(obj.r,obj.g,obj.b);
        ellipse(0,20,obj.head,obj.head);
        //mouth
        fill(obj.b,obj.g,obj.r);
        ellipse(0,20,25,5);
        // eyes
        fill(0);
        ellipse(-10,10,5,10);
        ellipse(10,10,5,10);
        //ears
        fill(obj.r,obj.g,obj.b);
        ellipse(-30,25,obj.ears,obj.ears*2);
        ellipse(30,25,obj.ears,obj.ears*2);
        //body
        rotate(radians(-45));
        fill(obj.r,obj.g,obj.b);
        rect(-50,50,obj.torso,obj.torso);
        //shoe
        rotate(radians(45));
        ellipse(-10,110,obj.shoes+5,obj.shoes);
        ellipse(10,110,obj.shoes+5,obj.shoes);
        //dialouge
        fill(255);
        ellipse(85,22,125,40);
        fill(obj.r,obj.g,obj.b);
        text(obj.dialogue,40,25);
        textSize(12);
        //name
        fill(255);
        textSize(20);
        text(obj.name,-20,-20);
        //age
        textSize(13);
        text("Age:", -20,-40);
        fill(obj.r,obj.g,obj.b);
        text(obj.age, 9,-40);
        //rotation
        //rotate(obj.rotation);
    pop();

}
