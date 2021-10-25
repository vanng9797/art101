var snd0,snd1,snd2,snd3,snd4,snd5;
var img1,img2,img3,img4,img5;
// var duration;
// var  slideWidth = 500;
var ghost;


function preload() {
  snd0 = loadSound("assets/recordscratch.wav");
  snd1 = loadSound("assets/kda1.mp3");
  snd2 = loadSound("assets/kda2.mp3");
  snd3 = loadSound("assets/kda3.mp3");
  snd4 = loadSound("assets/kda4.mp3");
  snd5 = loadSound("assets/kda5.mp3");
  img1 = loadImage("assets/AHRI.png");
  img2 = loadImage("assets/AKALI.png");
  img3 = loadImage("assets/KAISA.png");
  img4 = loadImage("assets/EVELYNN.png");
  img5 = loadImage("assets/KDA.png");
}

// global manager object
var mgr;

function setup() {
    createCanvas(1000, 1000);
     mgr = new SceneManager();
    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    mgr.addScene (intro);
    mgr.addScene (scene1);
    mgr.addScene (scene2);
    mgr.addScene (scene3);
    mgr.addScene (scene4);
    mgr.addScene (scene5);
    mgr.showNextScene();

    //create a sprite and add the 3 animations
    ghost = createSprite(400, 150, 50, 100);

    //label, first frame, last frame
    //the addAnimation method returns the added animation
    //that can be store in a temporary variable to change parameters
    var myAnimation = ghost.addAnimation('floating', 'def_assets/ghost_standing0001.png', 'def_assets/ghost_standing0007.png');
    //offX and offY is the distance of animation from the center of the sprite
    //in this case since the animations have different heights i want to adjust
    //the vertical offset to make the transition between floating and moving look better
    myAnimation.offY = 8;

    ghost.addAnimation('moving', 'def_assets/ghost_walk0001.png', 'def_assets/ghost_walk0004.png');

    ghost.addAnimation('spinning', 'def_assets/ghost_spin0001.png', 'def_assets/ghost_spin0003.png');


}

function draw()
{
    // pass the current draw function into the SceneManager
    mgr.draw();

    //if mouse is to the left
if(mouseX < ghost.position.x - 10) {
  ghost.changeAnimation('moving');
  //flip horizontally
  ghost.mirrorX(-1);
  //negative x velocity: move left
  ghost.velocity.x = -4;
}
else if(mouseX > ghost.position.x + 10) {
  ghost.changeAnimation('moving');
  //unflip
  ghost.mirrorX(1);
  ghost.velocity.x = 4;
}
else {
  //if close to the mouse, don't move
  ghost.changeAnimation('floating');
  ghost.velocity.x = 0;
}

if(mouseY < ghost.position.y - 10) {
  ghost.changeAnimation('moving');
  //flip horizontally
  ghost.mirrorY(-1);
  //negative x velocity: move left
  ghost.velocity.y = -4;
}
else if(mouseY > ghost.position.y + 10) {
  ghost.changeAnimation('moving');
  //unflip
  ghost.mirrorY(1);
  ghost.velocity.y = 4;
}
else {
  //if close to the mouse, don't move
  ghost.changeAnimation('floating');
  ghost.velocity.y = 0;
}


if(mouseIsPressed) {
  //the rotation is not part of the spinning animation
  ghost.rotation -= 10;
  ghost.changeAnimation('spinning');
}
else
  ghost.rotation = 0;

//up and down keys to change the scale
//note that scaling the image quality deteriorates
//and scaling to a negative value flips the image
if(keyIsDown(UP_ARROW))
  ghost.scale += 0.05;
if(keyIsDown(DOWN_ARROW))
  ghost.scale -= 0.05;

//draw the sprite
drawSprites();
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
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}
