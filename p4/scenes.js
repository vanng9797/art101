// // =============================================================
// // =                         BEGIN SCENES                      =
// // =============================================================


////////////////////////////// 0 /////////////////
function intro() {

  this.setup = function() {
    // snd1.stop();
    //
    // snd2.stop();
    //
    // snd3.stop();
    //
    // snd4.stop();
    //
    // snd5.stop();
    // snd6.stop();
    console.log("We are at setup for scene0");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    background("white");
    textAlign(CENTER);
    textSize(29);

  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function() {

    console.log("We are at entering scene0");
    loy = 350;
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();

    if (snd0.isPlaying()) {
      // .isPlaying() returns a boolean
      snd0.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd0.play();
      snd0.setVolume(0.5);
      //
    };

    if (snd1.isPlaying()) {
      // .isPlaying() returns a boolean
      snd1.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd1.play();
      snd1.setVolume(0.0);
      //
    };

    if (snd2.isPlaying()) {
      // .isPlaying() returns a boolean
      snd2.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd2.play();
      snd2.setVolume(0.0);
      //
    };
    if (snd3.isPlaying()) {
      // .isPlaying() returns a boolean
      snd3.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd3.play();
      snd3.setVolume(0.0);
      //
    };
    if (snd4.isPlaying()) {
      // .isPlaying() returns a boolean
      snd4.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd4.play();
      snd4.setVolume(0.0);
      //
    };
    if (snd5.isPlaying()) {
      // .isPlaying() returns a boolean
      snd5.pause(); // .play() will resume from .pause() position
      //
    } else {
      snd5.play();
      snd5.setVolume(0.0);
    };
      // snd6.play();
      // snd6.setVolume(0.1);
      //

      //send off stage
      helpbtnsprite.position.x =  130;
      helpbtnsprite.position.y =  70;
      helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
      helpbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        mgr.showScene(help);

          };
      //put the sprite on the stage
      nextbtnsprite.position.x = width  -150;
      nextbtnsprite.position.y = height -107;
      nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
      nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
      nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
      nextbtnsprite.onMouseReleased = function() {
        this.animation.goToFrame(0);
        mgr.showNextScene();
          };
////
  }


  this.draw = function() {
    background(0,0,0);
    image(img7, 0, 0, width, height);
    image(img5, 0, 0, width, height);

    textAlign(CENTER);
    textSize(30);
    push();
    //
    translate(width / 2, height/1.5);
    fill(255);
    text("M  U  S  I  C   V  I  S  U  A  L  I  Z  E  R", 0, -375);
        textSize(15);
    text("A P5JS PROJECT BY ", 0, 25);
        textSize(15);
    text("VAN NGUYEN", 0, 50);
    pop();

  }

  // this.mousePressed = function() {
  //   this.sceneManager.showScene(scene1);
  // }
}

///////////////////////  Help scene  ////////////////////////

function help() {

this.enter = function() {

    console.log("We are at help scene ");


    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////



  }

  this.draw = function() {
    background(255,255,255);
    image(img7, 0, 0, width, height);
console.log(snd1.currentTime());

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      // var rnd = floor(random(0, 4));

      // if(rnd === 0)
      //  newSprite.addAnimation('img', 'assets/AHRIbug.png');
      // if(rnd == 1)
      //   newSprite.addAnimation('img', 'assets/ghost_standing0004.png');
      // if(rnd == 2)
      //   newSprite.addAnimation('img', 'assets/cloud_breathing0001.png');


      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;

    }

    //the newest sprites are drawn on the top
    drawSprites();


    textAlign(LEFT);
    textSize(30);
    push();
    //
    translate(100, height/2.75);
    fill(200);
    text("🔹 Press key [1], [2], [3], [4], [5] to change scenes", 0, 0);
    text("🔸 Press key [0] to return Home, and [9] return Help scene", 0, 50);
    text("🔹 Press key [Q], [W], [E], [R], [T] to add sound effects", 0, 100);
    text("🔸 Press key [X] to pause audio", 0, 150);
    text("🔹 Click 'Next' to go to the next scene", 0, 200);
    text("🔸 Click 'Help' to see instructions", 0, 250);

    pop();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");
  }

  // this.mousePressed = function() {
  //   this.sceneManager.showNextScene();
// }


}


//////////////////////////////  1  /////////////////////////////////////

function scene1() {

  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    let loy = 255;
    console.log("We are at scene1 ");
    //  snd2.play();

    if (snd1.isPlaying()) {
      snd1.setVolume(1.0)
    // } else {
    //   snd0.isPlaying(); snd0.setVolume(0.0);
    //   snd1.isPlaying(); snd1.setVolume(0.0);
    //   snd2.isPlaying(); snd2.setVolume(0.0);
    //   snd3.isPlaying(); snd3.setVolume(0.0);
    //   snd4.isPlaying(); snd4.setVolume(0.0);
    //   snd5.isPlaying(); snd5.setVolume(0.0);
    };
    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {
    background(350-loy,0,0);
    image(img7, 0, 0, width, height);

    // size = map(level, 0,1,10,200);
    noStroke();
    fill(spectrum);
    let gap=100;
    for (let i=0; i<20; i++){
      for (let j=0; j<20; j++){
        rect(i*gap, j*gap, 10, 10);
      }
    }

    //image(img1, 0, 0, width, height);
// console.log(snd1.currentTime());

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/AHRI.png');
      // if(rnd == 1)
      //   newSprite.addAnimation('img', 'assets/ghost_standing0004.png');
      // if(rnd == 2)
      //   newSprite.addAnimation('img', 'assets/cloud_breathing0001.png');


      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    // textAlign(CENTER);
    // textSize(29);
    // push();
    // //
    // translate(width / 2, loy * 3);
    // fill(255);
    // text("AMPLITUDE of DRUM in BRIGHTNESS", 0, 0);
    // text("Scene 1", 0, 50);
    // if (loy < 0) {
    //   loy = 350;
    // } else {
    //   loy--;
    // }
    // pop();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");
  }

  // this.mousePressed = function() {
  //   this.sceneManager.showNextScene();
// }
size = map(level, 0,1,50,200);
fill(random(255));
rect(width/2, height/2,size, size);

}

///////////////////////  2  ////////////////////////

function scene2() {

  this.setup = function() {
    background(255,220,255);
   console.log("We are at setup for scene2");
       amp = new p5.Amplitude();
   amp.setInput(snd2);
  }

  this.enter = function() {

    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    let loy = 350;

   console.log("We are at scene2");

    if (snd2.isPlaying()) {

      snd2.setVolume(1.0);
    };

    //send off stage
    helpbtnsprite.position.x =  -500;
    helpbtnsprite.position.y =  -500;

    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {

background(0, loy, loy);
    image(img7, 0, 0, width, height);
level = amp.getLevel();
fill(random(180,255));
stroke(255);
strokeWeight(10);

  ellipse(width / 2, height / 2, 10 + level * 1500, 10 + level * 1500);
noStroke();
    // image(img2, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/AKALI.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;
    }

    //the newest sprites are drawn on the top
    drawSprites();



    // textAlign(CENTER);
    // textSize(29);
    // push();
    // //
    // translate(width / 2, loy * 3);
    // fill(255);
    // text("AMPLITUDE of DRUM in SCALE", 0, -50);
    // text("Scene 2", 0, 0);
    // if (loy > 350) {
    //   loy = 0;
    // } else {
    //   loy++;
    // }
    // //
    // pop();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");

  }

  // this.mousePressed = function() {
  //   this.sceneManager.showNextScene();
  // }
}


////////////////////////////// 3 /////////////////

function scene3() {

  //let loy = 255;

  // this.setup = function() {
  //   console.log("We are at scene3");
  // }

  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();

    let loy = 350;
    console.log("We are at scene3");



    if (snd3.isPlaying()) {
      snd3.setVolume(1.0);
    }
    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {
    background(350-loy,0, 350 - loy);
    image(img7, 0, 0, width, height);

for (let i=0; i < spectrum.length; i +=10){
  let x = map(i, 0, spectrum.length, 0, width);
  let y = map(spectrum[i], 0, 255, height/2, 300);
  stroke(random(100,255));
  strokeWeight(10);
  point(x,y);
  strokeWeight(.5);
  line(x,y,x,height);
}


    //every 10 frames
    if(frameCount%10 === 0) {
      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));
      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/KAISA.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;
    }

    //the newest sprites are drawn on the top
    drawSprites();

    // noStroke();
    // textAlign(CENTER);
    // textSize(29);
    //
    // push();
    // //
    // translate(width / 2, loy * 3);
    // fill(255);
    // text("SPECTRUM", 0, -50);
    // text( "Scene 3", 0, 0);
    //
    // if (loy < 0) {
    //   loy = 350;
    // } else {
    //   loy--;
    // }
    // pop();

  }

  // this.mousePressed = function() {
  //   this.sceneManager.showNextScene();
  // }
}

////////////////////////////// 4 /////////////////

function scene4() {

  // let loy = 255;
  //
  this.setup = function() {
    console.log("We are at scene4");


 filter = new p5.LowPass();

  // Disconnect soundfile from master output.
  // Then, connect it to the filter, so that we only hear the filtered sound
  snd1.disconnect();
  snd1.connect(filter);
  snd2.disconnect();
  snd2.connect(filter);
  snd3.disconnect();
  snd3.connect(filter);
  snd4.disconnect();
  snd4.connect(filter);
  snd5.disconnect();
  snd5.connect(filter);
  fft = new p5.FFT();

  }

  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    let loy = 350;
    console.log("We are at scene 4");

    if (snd4.isPlaying()) {

      snd4.setVolume(1.0);
    }
    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {
    background(loy, loy, 0);
    image(img7, 0, 0, width, height);


    // Map mouseX to a the cutoff frequency from the lowest
    // frequency (10Hz) to the highest (22050Hz) that humans can hear
    filterFreq = map(mouseX, 0, width, 10, 22050);

    // Map mouseY to resonance (volume boost) at the cutoff frequency
    filterRes = map(mouseY, 0, height, 15, 5);

    // set filter parameters
    filter.set(filterFreq, filterRes);

    // Draw every value in the FFT spectrum analysis where
    // x = lowest (10Hz) to highest (22050Hz) frequencies,
    // h = energy (amplitude / volume) at that frequency
    let spectrum = fft.analyze();
    stroke(255);
    for (let i = 0; i < spectrum.length; i++) {
      let x = map(i, 0, spectrum.length, 0, width);
      let h = -height + map(spectrum[i], 0, 255, height, 0);
      rect(x, height/2, width / spectrum.length-1, h/2);
    }


    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/EVELYNN.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    // textAlign(CENTER);
    // textSize(29);
    // push();
    // //
    // translate(width / 2, loy * 3);
    // fill(255);
    // text("FILTER LOWPASS", 0, -50);
    // text("scene 4", 0,0);
    // if (loy > 350) {
    //   loy = 0;
    // } else {
    //   loy++;
    // }
    // //
    // pop();
stroke(255);
rect(mouseX, mouseY, .0, 5000);
  }

  // this.mousePressed = function() {
  // //console.log("exit");
  //   this.sceneManager.showNextScene();
  // }

}

////////////////////////////// 5.0 /////////////////

function scene5() {

  // let loy = 255;
  //
  // this.setup = function() {
  //   console.log("We are at scene4");
  // }

  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    let loy = 350;
    console.log("We are at scene 5");

    if (snd5.isPlaying()) {

      snd5.setVolume(1);
    }
    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {
    // background(0,0,loy);
        image(img7, 0, 0, width, height);
    image(img6, 0, 0, width, height/1.15);

    let volume = map(mouseX, 0, width, 0, 1);
    volume = constrain(volume, 0, 1);
    snd5.amp(volume);


    let x = map(mouseX, 0, width, 0, 255);

    background(x,0,255,50);


    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      // if(rnd === 0)
      //   newSprite.addAnimation('img', 'assets/KAISA.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.2;
    }


    //if mouse is to the left


//
    //the newest sprites are drawn on the top
    drawSprites();


    // textAlign(CENTER);
    // textSize(29);
    // push();
    // //
    // translate(width / 2, loy * 3);
    // fill(255);
    // text("VOCAL VOLUME", 0, -50);
    // text("(Left) Low – High (Right)", 0, 0);
    // if (loy > 350) {
    //   loy = 0;
    // } else {
    //   loy++;
    // }
    //
    // pop();
    stroke(255);
    rect(mouseX, mouseY, .0, 5000);


  }
  // this.mousePressed = function() {
  //
  //   //console.log("exit");
  //   this.sceneManager.showNextScene();
  // }

//      this.mousePressed = function() {
//        mgr.showScene(scene6);
// }

}


//////////////////////////// 5.1 /////////////////

function scene6() {

  let loy = 255;

  this.setup = function() {
    console.log("We are at setup for scene6");


  }

  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    snd6.isPlaying();

    let loy = 350;
    console.log("We are entering scene6");

    if (snd6.isPlaying()) {

      snd1.setVolume(0.0);
      snd2.setVolume(0.0);
      snd3.setVolume(0.0);
      snd4.setVolume(0.0);
      snd5.setVolume(0.0);
      snd6.setVolume(1.0);
    }
    //send off stage
    helpbtnsprite.position.x =  130;
    helpbtnsprite.position.y =  70;
    helpbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    helpbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    helpbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    helpbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showScene(help);

        };
    //put the sprite on the stage
    nextbtnsprite.position.x = width  -150;
    nextbtnsprite.position.y = height -107;
    nextbtnsprite.onMouseOver = function() { this.animation.goToFrame(1);};
    nextbtnsprite.onMouseOut = function() { this.animation.goToFrame(0);};
    nextbtnsprite.onMousePressed = function() { this.animation.goToFrame(2);};
    nextbtnsprite.onMouseReleased = function() {
      this.animation.goToFrame(0);
      mgr.showNextScene();
        };
////
  }

  this.draw = function() {
    background(0, 0, 0);
    image(img7, 0, 0, width, height);
  //  image(img5, 0, 0, width, height);

    textAlign(CENTER);
    textSize(29);

    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("THE END", 0, -50);
    text("Hope you enjoyed it!", 0, 0);

    if (loy < 0) {
      loy =350;
    } else {
      loy--;
    }
    //
    pop();

  }


}
