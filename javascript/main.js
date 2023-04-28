// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");
let gameObj;
// *STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  // cambiar las pantallas d juego
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";
  // crear los elementos del juego
  //vamos a crear una clase
  gameObj = new Game();
  console.log(gameObj);
  // iniciar el bucle del juego (recursion)
  gameObj.gameLoop();
};

const restartGame = () => {
  gameoverScreenDOM.style.display = "none";
  canvas.style.display = "block";
  gameObj = new Game();
  gameObj.gameLoop();
};

// *ADD EVENT LISTENER
startBtnDOM.addEventListener("click", startGame);
restartBtnDOM.addEventListener("click", restartGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    gameObj.bulletShot();
  }
});
