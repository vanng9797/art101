var snd0,snd1,snd2,snd3,snd4,snd5, q,w,e,r,t;
var img1,img2,img3,img4,img5, img6, img7;
// var duration;
// var  slideWidth = 500;
let amp,fft;
let level, spectrum;

var ghost;
var nextbtnanim, nextbtnsprite;
var helpbtnanim, helpbtnsprite;

var asterisk;
var draggedSprite;



let filter, filterFreq, filterRes;

function preload() {
  snd0 = loadSound("assets/recordscratch.wav");
  snd1 = loadSound("assets/kda1.mp3");
  snd2 = loadSound("assets/kda2.mp3");
  snd3 = loadSound("assets/kda3.mp3");
  snd4 = loadSound("assets/kda4.mp3");
  snd5 = loadSound("assets/kda5.mp3");
  snd6 = loadSound("assets/kda.mp3");
  q = loadSound("assets/q.mp3");
  w = loadSound("assets/w.mp3");
  e = loadSound("assets/e.mp3");
  r = loadSound("assets/r.mp3");
  t = loadSound("assets/t.mp3");
  img1 = loadImage("assets/AHRI.png");
  img2 = loadImage("assets/AKALI.png");
  img3 = loadImage("assets/KAISA.png");
  img4 = loadImage("assets/EVELYNN.png");
  img5 = loadImage("assets/KDA.png");
  img6 = loadImage("assets/allout.png");
  img7 = loadImage("assets/blank_fillable.jpg");
  img8 = loadImage("assets/35mmTexture1.png");

  helpbtnanim = loadAnimation('assets/help_u.png',
  'assets/help_r.png', 'assets/help_d.png');
  helpbtnsprite = createSprite(-500,0); //create and move 'off stage'
  helpbtnsprite.addAnimation('normal',helpbtnanim);

  nextbtnanim = loadAnimation('assets/next_btn_u.png',
  'assets/next_btn_r.png', 'assets/next_btn_d.png');
   nextbtnsprite = createSprite(-500,0);
   nextbtnsprite.addAnimation('normal',nextbtnanim);

}

// global manager object
var mgr;

function setup() {
    createCanvas(1000, 1000);
    amp = new p5.Amplitude();
    fft = new p5.FFT();
    rectMode(CENTER);
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (help);
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (scene5);
    mgr.addScene (scene6);
    mgr.showNextScene();


    //pausing sprite animations
    helpbtnsprite.animation.stop();
    nextbtnsprite.animation.stop();

    //create a sprite and add the 3 animations
    //ghost = createSprite(400, 150, 50, 100);

    //label, first frame, last frame
    //the addAnimation method returns the added animation
    //that can be store in a temporary variable to change parameters
    //var myAnimation = ghost.addAnimation('floating', 'def_assets/ghost_standing0001.png', 'def_assets/ghost_standing0007.png');
    //offX and offY is the distance of animation from the center of the sprite
    //in this case since the animations have different heights i want to adjust
    //the vertical offset to make the transition between floating and moving look better
    //myAnimation.offY = 8;

    //ghost.addAnimation('moving', 'def_assets/ghost_walk0001.png', 'def_assets/ghost_walk0004.png');

    //ghost.addAnimation('spinning', 'def_assets/ghost_spin0001.png', 'def_assets/ghost_spin0003.png');


}

function draw()
{

level = amp.getLevel();
spectrum = fft.analyze();

  // pass the current draw function into the SceneManager
mgr.draw();

//     //if mouse is to the left
// if(mouseX < ghost.position.x - 10) {
//   ghost.changeAnimation('moving');
//   //flip horizontally
//   ghost.mirrorX(-1);
//   //negative x velocity: move left
//   ghost.velocity.x = -4;
// }
// else if(mouseX > ghost.position.x + 10) {
//   ghost.changeAnimation('moving');
//   //unflip
//   ghost.mirrorX(1);
//   ghost.velocity.x = 4;
// }
// else {
//   //if close to the mouse, don't move
//   ghost.changeAnimation('floating');
//   ghost.velocity.x = 0;
// }
//
// if(mouseY < ghost.position.y - 10) {
//   ghost.changeAnimation('moving');
//   //flip horizontally
//   ghost.mirrorY(-1);
//   //negative x velocity: move left
//   ghost.velocity.y = -4;
// }
// else if(mouseY > ghost.position.y + 10) {
//   ghost.changeAnimation('moving');
//   //unflip
//   ghost.mirrorY(1);
//   ghost.velocity.y = 4;
// }
// else {
//   //if close to the mouse, don't move
//   ghost.changeAnimation('floating');
//   ghost.velocity.y = 0;
// }
//
//
// if(mouseIsPressed) {
//   //the rotation is not part of the spinning animation
//   ghost.rotation -= 10;
//   ghost.changeAnimation('spinning');
// }
// else
//   ghost.rotation = 0;
//
// //up and down keys to change the scale
// //note that scaling the image quality deteriorates
// //and scaling to a negative value flips the image
// if(keyIsDown(UP_ARROW))
//   ghost.scale += 0.05;
// if(keyIsDown(DOWN_ARROW))
//   ghost.scale -= 0.05;
//
//
// ////



//draw the sprite
drawSprites();

// drawGraphics();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

 function mouseMoved()
 {
   // pass the mouseMoved message into the SceneManager
   mgr.handleEvent("mouseDragged");
}

function mouseDragged()
{
   // pass the mouseMoved message into the SceneManager
    mgr.handleEvent("mouseDragged");
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '0':
            mgr.showScene( intro );
            break;
        case '9':
                mgr.showScene( help );
                break;
        case '1':
            mgr.showScene( scene1 );
            break;
        case '2':
            mgr.showScene( scene2 );
            break;
        case '3':
            mgr.showScene( scene3 );
            break;
        case '4':
            mgr.showScene( scene4 );
            break;
        case '5':
                mgr.showScene( scene5 );
            break;

        case '6':
                mgr.showScene( scene6 );
            break;
        case 'x':
            if (snd0.isPlaying()) {snd0.pause();}        else (snd0.isPlaying());
            if (snd1.isPlaying()) {snd1.pause();}        else (snd1.play());
            if (snd2.isPlaying()) {snd2.pause();}        else (snd2.play());
            if (snd3.isPlaying()) {snd3.pause();}        else (snd3.play());
            if (snd4.isPlaying()) {snd4.pause();}        else (snd4.play());
            if (snd5.isPlaying()) {snd5.pause();}        else (snd5.play());
            break;
        case '-':
      spectrum -= 0.5;
            break;
        case '=':
      spectrum += 0.5;
            break;
        case 'q':
        q.play();
        var splat = createSprite(mouseX, mouseY);
         splat.addAnimation('normal', 'def_assets/asterisk_explode0001.png', 'def_assets/asterisk_explode0011.png');
         splat.life = 40;
            break;
        case 'w':
        w.play();
         var splat = createSprite(width/2-100, height/2);
         splat.addAnimation('normal','assets/AKALIbug.png','assets/KAISAbug.png','assets/EVELYNNbug.png', 'assets/AHRIbug.png');
         splat.life = 15;
        splat.scale= 0.1;
        var splat = createSprite(width/2, height/2);
         splat.addAnimation('normal', 'assets/AHRIbug.png','assets/AKALIbug.png','assets/KAISAbug.png','assets/EVELYNNbug.png',);
         splat.life = 20;
        splat.scale= 0.1;
       var splat = createSprite(width/2+100, height/2);
       splat.addAnimation('normal', 'assets/KAISAbug.png','assets/EVELYNNbug.png','assets/AHRIbug.png','assets/AKALIbug.png',);
         splat.life = 30;
        splat.scale= 0.1;

            break;
        case 'e':
        e.play();
        var newSprite = createSprite(random(200,800), random(400,600),30,30);

        //assign an animation
        newSprite.addAnimation('normal', 'def_assets/bubbly0001.png', 'def_assets/bubbly0002.png', 'def_assets/bubbly0003.png', 'def_assets/bubbly0004.png');

newSprite.life = 20;
            break;
        case 'r':
        r.play();
        //I create a sprite at mouse position
                var newSprite = createSprite(random(200,800), height/2,30,30);

                //assign an animation
                newSprite.addAnimation('normal', 'def_assets/asterisk.png', 'def_assets/triangle.png', 'def_assets/square.png', 'def_assets/cloud.png', 'def_assets/star.png', 'def_assets/mess.png', 'def_assets/monster.png');

      newSprite.life = 20;
            break;
        case 't':
        t.play();
        var s = createSprite(width/2, height/2, 50, 50);
    //if no image or animation is associated it will be a rectancle of the specified size
    //and a random color

    //now you can use the variable to set properties
    //e.g. a random velocity on the x and y coordinates
    s.velocity.x = random(-5, 5);
    s.velocity.y = random(-5, 5);
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
