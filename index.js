var background = document.querySelector(".background");
var body = document.querySelector("body");

function ranNumb(max) {
    return Math.floor(Math.random() * max);
  }

function init() {
  document.querySelector(".text").innerHTML =
    '<h1 class="line-2 anim-typewriter2"> welcome to FM-NE </h1>';

  setTimeout(() => {
    document.querySelector(".text").innerHTML =
      '<h1 class="line-2 anim-typewriter2"> press any letters </h1>';
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
    word.textContent = "RULLEBÖR.";
    word.style.top = `${ranNumb(50)}vh`;
    word.style.left = `${ranNumb(50)}vw`;
  }
});

////////////////////////////////////////////////// PART 2
function refresh() {
  document.addEventListener("keydown", function (b) {
    if (b.code == "Space") {
      let expl = document.createElement("div");
      body.appendChild(expl);
      expl.innerHTML = `
            <img id="expl" src="part2/expl.gif">
            `;
      document.getElementById("explosion").play();
      setTimeout(() => {
        this.location.reload();
      }, 700);
    }
  });
}

function changeChar() {
  let charArr = [
    "3AlV",
    "hdt",
    "7Uz",
    "xw",
    "XiPu",
    "3uG2",
    "4FB4",
    "xw",
    "yb",
  ];

  document.getElementById("char1").addEventListener("click", () => {
    document.getElementById("char1").src = `part2/${
      charArr[ranNumb(charArr.length)]
    }.gif`;
  });

  document.getElementById("char2").addEventListener("click", () => {
    document.getElementById("char2").src = `part2/${
      charArr[ranNumb(charArr.length)]
    }.gif`;
  });

  document.getElementById("char3").addEventListener("click", () => {
    document.getElementById("char3").src = `part2/${
      charArr[ranNumb(charArr.length)]
    }.gif`;
  });
}

function part2() {
  document.addEventListener("keydown", function (e) {
    if (e.key == "e") {
      body.innerHTML = `
          <audio id="punk" controls style="display:none"> <source src="sound/punk.mp3" type="audio/mp3"> </audio>

          <audio id="explosion" controls style="display:none"> <source src="sound/explosion-6055.mp3" type="audio/mp3"> </audio>

           <img id="ball" src="part2/discoball.gif">
           <img id="floor" src="part2/33bk.gif">

           <h1 id="dont"></h1>

           <audio id="gg" controls style="display:none"> <source src="sound/gg.mp3" type="audio/mp3"> </audio>
    
           <img id="char1" src="part2/xw.gif">
           <img id="char2" src="part2/3AlV.gif">
           <img id="char3" src="part2/hdt.gif">`;
      body.style.backgroundColor = "black";
      body.style.backgroundImage = "none";
      document.getElementById("gg").play();
      document.getElementById("punk").play();

      setTimeout(() => {
        document.getElementById("ball").style.top = "5vh";
        document.getElementById("floor").style.bottom = "-5vh";
        document.getElementById("char1").style.opacity = "100%";
        document.getElementById("char2").style.opacity = "100%";
        document.getElementById("char3").style.opacity = "100%";
      }, 5000);

      setTimeout(() => {
        document.getElementById("dont").innerHTML =
          "randomize a new dancer <br>by clicking on it";
        document.getElementById("dont").style.display = "block";
      }, 15000);

      setTimeout(() => {
        document.getElementById("dont").innerHTML = "";
      }, 38000);

      setTimeout(() => {
        document.getElementById("dont").innerHTML = "do NOT press SPACE";
        document.getElementById("dont").style.color = "red";
      }, 40000);

      changeChar();

      refresh();
    } else if (e.key == "r") {
      document.getElementById("riddle").play();
      document.querySelector(
        ".line-1"
      ).innerHTML = `From the beginning of eternity <br> To the end of time and space <br> To the beginning of every end <br> And the end of every place <br>

      What am I?`;
    } else {
      document.getElementById("tryagain").play();
    }
  });
}

function spaceText() {
  part2();
  body.style.backgroundColor = "black";
  body.style.backgroundImage = "";

  body.innerHTML = `<h1 class="line-1"></h1>
     <audio id="punk" controls style="display:none"> <source src="sound/punk.mp3" type="audio/mp3"> </audio>
     
     <audio id="intro" controls style="display:none"> <source src="sound/intro.mp3" type="audio/mp3"> </audio>
     <audio id="riddle" controls style="display:none"> <source src="sound/riddle.mp3" type="audio/mp3"> </audio>
     <audio id="tryagain" controls style="display:none"> <source src="sound/tryagain.mp3" type="audio/mp3"> </audio>
     `;

  document.getElementById("intro").play();

  setTimeout(() => {
    document.getElementById("riddle").play();
  }, 12000);

  setTimeout(() => {
    document.querySelector(".line-1").innerHTML =
      "press r to repeat the riddle";
  }, 24000);
}

setTimeout(spaceText, 70000);

init();
