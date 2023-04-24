// propiedades de Game.js => todos los elementos q existen en el juego,
class Game {
  constructor() {
    // el constructor es TODOS los elementos y valores iniciales del juego.
    //el fono
    this.background = new Image();
    this.background.src = "images/background.jpg";

    this.isGameOn = true;
    //! MVP
    //la torreta
    this.torreta = new Torreta();
    console.log(this.torreta);

    //los aviones
    //* probar haciendo un solo avion
    this.aircraft = new Aircraft()

    //la bala
  }

  //! MVP
  // metodos d Game => todas las acciones q se realizan en el juego.
  
  // que el cañón dispare
  // colisiones de la bala con los aviones

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  gameLoop = () => {
    console.log("ejecutando recursión del juego");

    // 1. limpieza del canvas

    // 2. acciones y movimientos d los elementos
    // 3. dibujado d los elementos
    this.drawBackground();
    this.torreta.torretaDraw();
    this.aircraft.aircraftDraw();
    // 4. recursion
    requestAnimationFrame(this.gameLoop);
  };
}
