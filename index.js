var background = document.querySelector(".background");
var body = document.querySelector("body");

function init() {
  document.querySelector(".text").innerHTML =
    '<h1 class="line-2 anim-typewriter2"> welcome to FM-NE </h1>';

  setTimeout(() => {
    document.querySelector(".text").innerHTML =
      '<h1 class="line-2 anim-typewriter2"> press any letter </h1>';
    setTimeout(() => {
      document.querySelector(".text").style.display = "none";
    }, 7000);
  }, 8000);
}
////////////////////////////////////////////////// BACKGROUND
document.addEventListener("keydown", function (e) {
  if (e.key == "a") {
    background.style.backgroundImage = "url(background/comp.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "k") {
    background.style.backgroundImage = "url(background/clap.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "o") {
    background.style.backgroundImage = "url(background/cloud.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "b") {
    background.style.backgroundImage = "url(background/star.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "t") {
    background.style.backgroundImage = "url(background/giphy.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "i") {
    background.style.backgroundImage = "url(background/mountain.gif)";
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "y") {
    background.style.backgroundImage = "url(background/thematrix.gif)";
  }
});

////////////////////////////////////////////////// DIVPIC
document.addEventListener("keydown", function (e) {
  if (e.key == "h") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/pringles.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "w") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/forest.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "z") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/lighthouse.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "r") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/soultrain.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "n") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/nokia.gif)";
    pic.style.backgroundSize = "contain";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "e") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/turtles.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key == "j") {
    let pic = document.querySelector(".pic");

    pic.style.backgroundImage = "url(divPicture/matrix.gif)";
    pic.style.top = `${ranNumb(50)}vh`;
    pic.style.left = `${ranNumb(50)}vw`;
  }
});

////////////////////////////////////////////////// SOUND

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

////////////////////////////////////////////////// WORDS
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

////////////////////////////////////////////////// PART 2
document.addEventListener("keydown", function (e) {
  if (e.code == "Space") {
    body.innerHTML = `
      <audio id="punk" controls style="display:none"> <source src="sound/punk.mp3" type="audio/mp3"> </audio>
       <img id="ball" src="part2/discoball.gif">`;
    body.style.backgroundColor = "black";
    body.style.backgroundImage = "none";
    document.getElementById("punk").play();

    setTimeout(() => {
      document.getElementById("ball").style.top = "55px";
    }, 9000);
  }
});

function spaceText() {
  body.style.backgroundColor = "black";
  body.style.backgroundImage = "";

  body.innerHTML =
    '<h1 class="line-1 anim-typewriter"> do NOT press SPACE </h1> <audio id="punk" controls style="display:none"> <source src="sound/punk.mp3" type="audio/mp3"> </audio>';
}

setTimeout(spaceText, 80000);

init();
