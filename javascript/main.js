// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen");
const gameoverScreenDOM = document.querySelector("#gameover-screen");
const startBtnDOM = document.querySelector("#start-btn");
const canvas = document.querySelector("#my-canvas");

const ctx = canvas.getContext("2d");

// *STATE MANAGEMENT FUNCTIONS

const startGame = () => {
  console.log("intentando iniciar el juego");

  // cambiar las pantallas d juego
  splashScreenDOM.style.display = "none";
  canvas.style.display = "block";
  // crear los elementos del juego
  //vamos a crear una clase
  let gameObj = new Game();
  console.log(gameObj);
  // iniciar el bucle del juego (recursion)
  gameObj.gameLoop();
};

// *ADD EVENT LISTENER
startBtnDOM.addEventListener("click", startGame);
