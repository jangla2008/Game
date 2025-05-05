let car = document.getElementById("car");
let enemyCar = document.getElementById("enemyCar");
let score = 0;
let scoreBoard = document.getElementById("score");
let gameOverText = document.getElementById("gameOver");
let carPos = 175;

function moveLeft() {
  if (carPos > 75) {
    carPos -= 50;
    car.style.left = carPos + "px";
  }
}

function moveRight() {
  if (carPos < 275) {
    carPos += 50;
    car.style.left = carPos + "px";
  }
}

function randomEnemy() {
  let positions = [75, 175, 275];
  return positions[Math.floor(Math.random() * 3)];
}

function moveEnemy() {
  let top = parseInt(enemyCar.style.top.replace("px", ""));
  top += 5;
  enemyCar.style.top = top + "px";

  if (top > 600) {
    enemyCar.style.top = "-100px";
    enemyCar.style.left = randomEnemy() + "px";
    score++;
    scoreBoard.innerText = "Score: " + score;
  }

  // collision detection
  if (
    top + 100 > 500 &&
    parseInt(enemyCar.style.left) === carPos
  ) {
    clearInterval(gameLoop);
    gameOverText.style.display = "block";
  }
}

enemyCar.style.left = randomEnemy() + "px";
enemyCar.style.top = "-100px";

let gameLoop = setInterval(moveEnemy, 30);
