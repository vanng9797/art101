// // =============================================================
// // =                         BEGIN SCENES                      =
// // =============================================================
//
// // example of global var that can be used between scenes
// let loy = 0;
// function intro() {
//
//   this.setup = function() {
//     console.log("We are at setup");
//     // do all stuff you want to initialize things,
//     // as this it need to be called only once.
//     background("white");
//     textAlign(CENTER);
//     textSize(29);
//   }
//
//   // enter() will be called each time SceneManager switches
//   // to this// scene
//   this.enter = function() {
//     console.log("We are at the very beginning setup");
//     loy = 100;
//     snd0.isPlaying();
//     snd1.isPlaying();
//     snd2.isPlaying();
//     snd3.isPlaying();
//     snd4.isPlaying();
//     snd5.isPlaying();
//
//     if (snd1.isPlaying()) {
//       // .isPlaying() returns a boolean
//       snd1.pause(); // .play() will resume from .pause() position
//       //
//     } else {
//       snd1.play();
//       snd1.setVolume(0.0);
//       //
//     };
//
//     if (snd2.isPlaying()) {
//       // .isPlaying() returns a boolean
//       snd2.pause(); // .play() will resume from .pause() position
//       //
//     } else {
//       snd2.play();
//       snd2.setVolume(0.0);
//       //
//     };
//     if (snd3.isPlaying()) {
//       // .isPlaying() returns a boolean
//       snd3.pause(); // .play() will resume from .pause() position
//       //
//     } else {
//       snd3.play();
//       snd3.setVolume(0.0);
//       //
//     };
//     if (snd4.isPlaying()) {
//       // .isPlaying() returns a boolean
//       snd4.pause(); // .play() will resume from .pause() position
//       //
//     } else {
//       snd4.play();
//       snd4.setVolume(0.0);
//       //
//     };
//     if (snd5.isPlaying()) {
//       // .isPlaying() returns a boolean
//       snd5.pause(); // .play() will resume from .pause() position
//       //
//     } else {
//       snd5.play();
//       snd5.setVolume(0.0);
//       //
//     };
//
//   }
//   this.draw = function() {
//     background(100, 100, 255);
//     image(img5, 0, 0, width, height);
//     textAlign(CENTER);
//     textSize(29);
//     push();
//     //
//     translate(width / 2, loy * 3);
//     fill(255);
//     text("We are going deep...", 0, 0);
//     text("Click to Continue", 0, 50);
//     if (loy > 350) {
//       loy = 0;
//     } else {
//       loy++;
//     }
//     //
//     pop();
//   }
//
//   this.mousePressed = function() {
//     this.sceneManager.showScene(intro);
//   }
// }


////////////////////////////// 0 /////////////////
function intro() {

  this.setup = function() {
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
      //
    };

  }


  this.draw = function() {
    background(0, 0, 0);
    image(img5, 0, 0, width, height);
    textAlign(CENTER);
    textSize(29);
    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("We are going deep...", 0, -50);
    text("Click to Continue", 0, 0);
    if (loy > 350) {
      loy = 0;
    } else {
      loy++;
    }
    //
    pop();
  }

  this.mousePressed = function() {
    this.sceneManager.showScene(scene1);
  }
}

///////////////////////  1  ////////////////////////

function scene1() {
let loy =350;
  this.enter = function() {
    snd0.isPlaying();
    snd1.isPlaying();
    snd2.isPlaying();
    snd3.isPlaying();
    snd4.isPlaying();
    snd5.isPlaying();
    let loy = 255;
    console.log("We are at scene1 ");
    //  snd2.loop();

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

  }

  this.draw = function() {
    background(350-loy,0,0);
    image(img1, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/AHRIbug.png');
      // if(rnd == 1)
      //   newSprite.addAnimation('img', 'assets/ghost_standing0004.png');
      // if(rnd == 2)
      //   newSprite.addAnimation('img', 'assets/cloud_breathing0001.png');


      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.15;
      newSprite.filter=INVERT;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    textAlign(CENTER);
    textSize(29);
    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("AHRI", 0, 0);
    text("Click to Continue", 0, 50);
    if (loy < 0) {
      loy = 350;
    } else {
      loy--;
    }
    pop();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");
  }

  this.mousePressed = function() {
    this.sceneManager.showNextScene();


  }


}

///////////////////////  2  ////////////////////////

function scene2() {

  this.setup = function() {
    background(255,220,255);
   console.log("We are at setup for scene2");
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
    }
  }

  this.draw = function() {
    background(0, loy, loy);
    image(img2, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/AKALIbug.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.15;
    }

    //the newest sprites are drawn on the top
    drawSprites();



    textAlign(CENTER);
    textSize(29);
    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("AKALI", 0, -50);
    text("Click to Continue", 0, 0);
    if (loy > 350) {
      loy = 0;
    } else {
      loy++;
    }
    //
    pop();
  }

  this.mouseDragged = function() {
    console.log("mouseDragged");

  }

  this.mousePressed = function() {


    this.sceneManager.showNextScene();
  }
}


////////////////////////////// 3 /////////////////

function scene3() {

  //let loy = 255;

  // this.setup = function() {
  //   console.log("We are at scene3");
  //
  //
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

  }

  this.draw = function() {
    background(350-loy,0, 350 - loy);
    image(img3, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/KAISAbug.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.15;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    textAlign(CENTER);
    textSize(29);

    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("KAISA", 0, -50);
    text("We are at scene3", 0, 0);

    if (loy < 0) {
      loy = 350;
    } else {
      loy--;
    }
    //
    pop();

  }

  this.mousePressed = function() {
    this.sceneManager.showNextScene();
  }

}

////////////////////////////// 4 /////////////////

function scene4() {

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
    console.log("We are at scene 4");

    if (snd4.isPlaying()) {

      snd4.setVolume(1.0);
    }

  }

  this.draw = function() {
    background(loy, loy, 0);
    image(img4, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      if(rnd === 0)
        newSprite.addAnimation('img', 'assets/EVELYNNbug.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.15;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    textAlign(CENTER);
    textSize(29);
    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("EVELYNN", 0, -50);
    text("Click to Continue", 0, 0);
    if (loy > 350) {
      loy = 0;
    } else {
      loy++;
    }
    //
    pop();
  }

  this.mousePressed = function() {

    //console.log("exit");
    this.sceneManager.showNextScene();
  }

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

      snd5.setVolume(0.8);
    }

  }

  this.draw = function() {
    background(0,0,loy);
    image(img5, 0, 0, width, height);

    //every 10 frames
    if(frameCount%10 === 0) {

      //create a sprite in a random position
      var newSprite = createSprite(random(0, width), random(0, height));
      //assign a random appearance
      var rnd = floor(random(0, 4));

      // if(rnd === 0)
      //   newSprite.addAnimation('img', 'assets/KAISAbug.png');

      //set a lifespan to avoid consuming all the memory
      newSprite.life = 50;
      newSprite.scale= 0.15;
    }

    //the newest sprites are drawn on the top
    drawSprites();


    textAlign(CENTER);
    textSize(29);
    push();
    //
    translate(width / 2, loy * 3);
    fill(255);
    text("ALL OUT", 0, -50);
    text("Click to Continue", 0, 0);
    if (loy > 350) {
      loy = 0;
    } else {
      loy++;
    }
    //
    pop();
  }

  // this.mousePressed = function() {
  //
  //   //console.log("exit");
  //   this.sceneManager.showNextScene();
  // }

     this.mousePressed = function() {

       mgr.showScene(scene1);
}

}


////////////////////////////// 5 /////////////////
//
// function scene5() {
//
//   let loy = 255;
//
//   this.setup = function() {
//     console.log("We are at setup for scene5");
//
//
//   }
//
//   this.enter = function() {
//     snd0.isPlaying();
//     snd1.isPlaying();
//     snd2.isPlaying();
//     snd3.isPlaying();
//     snd4.isPlaying();
//     snd5.isPlaying();
//
//
//     let loy = 350;
//     console.log("We are entering scene5");
//
//     if (snd5.isPlaying()) {
//
//       snd1.setVolume(0.0);
//       snd2.setVolume(0.0);
//       snd3.setVolume(0.0);
//       snd4.setVolume(0.0);
//       snd5.setVolume(1.0);
//     }
//
//   }
//
//   this.draw = function() {
//     background(0, 0, 255 - loy);
//     image(img5, 0, 0, width, height);
//     textAlign(CENTER);
//     textSize(29);
//
//     push();
//     //
//     translate(width / 2, loy * 3);
//     fill(255);
//     text("Wiggle the mouse to get their attention...", 0, -50);
//     text("Click the mouse or hit '0' to go back.", 0, 0);
//
//     if (loy < 0) {
//       loy =350;
//     } else {
//       loy--;
//     }
//     //
//     pop();
//
//   }
//
//   this.mousePressed = function() {
//
//     mgr.showScene(scene1);
//   }
//
// }
