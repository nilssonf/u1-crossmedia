var body = document.querySelector("body");

// BACKGROUND
document.addEventListener("keydown", function (e) {
    if (e.key == "a") {
      
        body.style.backgroundImage = "url(background/comp.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "k") {
      
        body.style.backgroundImage = "url(background/clap.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "o") {
      
        body.style.backgroundImage = "url(background/cloud.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "b") {
      
        body.style.backgroundImage = "url(background/desert.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "t") {
      
        body.style.backgroundImage = "url(background/giphy.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "i") {
      
        body.style.backgroundImage = "url(background/mountain.gif)"
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "y") {
      
        body.style.backgroundImage = "url(background/thematrix.gif)"
    }
  });

// DIVPIC
  document.addEventListener("keydown", function (e) {
    if (e.key == "h") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/pringles.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "w") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/forest.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "z") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/lighthouse.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "r") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/soultrain.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "n") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/nokia.gif)"
        pic.style.backgroundSize = "contain";
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "e") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/turtles.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "j") {

        let pic = document.querySelector(".pic");
      
        pic.style.backgroundImage = "url(divPicture/matrix.gif)"
        pic.style.top = `${ranNumb(50)}vh`;
        pic.style.left = `${ranNumb(50)}vw`;
    }
  });

// SOUND

  document.addEventListener("keydown", function (e) {
    if (e.key == "q") {
      document.getElementById("waves").play();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "x") {
      document.getElementById("forest").play();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "c") {
      document.getElementById("wind").play();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "l") {
      document.getElementById("comp").play();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "s") {
      document.getElementById("crowd").play();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "m") {
      document.getElementById("hospital").play();
    }
  });

// WORDS
  document.addEventListener("keydown", function (e) {
    if (e.key == "d") {

        let word = document.querySelector(".word");
        word.textContent = "DANCE.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "f") {
        let word = document.querySelector(".word");
        word.textContent = "PIZZA.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "g") {
        let word = document.querySelector(".word");
        word.textContent = "DISAPPOINTMENT.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "p") {
        let word = document.querySelector(".word");
        word.textContent = "MOON.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "u") {
        let word = document.querySelector(".word");
        word.textContent = "WHALE.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key == "v") {
        let word = document.querySelector(".word");
        word.textContent = "MOCCA.";
        word.style.top = `${ranNumb(50)}vh`;
        word.style.left = `${ranNumb(50)}vw`;
    }
  });

  function ranNumb(max) {
    return Math.floor(Math.random() * max);
  }


  
