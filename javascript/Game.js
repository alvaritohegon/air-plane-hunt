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
    // this.aircraft = new Aircraft()
    this.aircraftArr = [];

    //la bala
    //* this.bullet = new Bullet();
    this.bulletArr = [];
  }

  //! MVP
  // metodos d Game => todas las acciones q se realizan en el juego.
  aircraftsAparecen = () => {
    // metodo que determina cuando deberia aparecer un avion
    if (
      this.aircraftArr.length === 0 ||
      this.aircraftArr[this.aircraftArr.length - 1].x < 200
    ) {
      // cuando empieza el juego (array vacio)
      let nuevoAircraftArriba = new Aircraft(0);
      this.aircraftArr.push(nuevoAircraftArriba); // añade un avion
    }
  };

  bulletShot = () => {
    if (
      this.bulletArr.length === 0 ||
      this.bulletArr[this.bulletArr.length - 1].y < 200
    ) {
      let nuevaBullet = new Bullet();
      this.bulletArr.push(nuevaBullet); // añade una bala
    }
  };

  // colisiones de la bala con los aviones

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  removeAircraftOut = () => {
    if (this.aircraftArr[0].x + this.aircraftArr[0].w < 0) {
      this.aircraftArr.shift();
      // console.log("test");
    }
  };

  removeBulletsOut = () => {
    if (
      this.bulletArr.length !== 0 &&
      this.bulletArr[0].y + this.bulletArr[0].h < 0
    ) {
      this.bulletArr.shift();
      console.log("test");
    }
  };

  gameLoop = () => {
    console.log("ejecutando recursión del juego");

    // 1. limpieza del canvas
    //toDo

    // 2. acciones y movimientos d los elementos
    // this.aircraft.move()
    this.aircraftArr.forEach((eachAircraft) => {
      eachAircraft.move();
    });
    this.aircraftsAparecen();
    // this.bullet.bulletMove();
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.bulletMove();
    });
    this.removeAircraftOut();
    this.removeBulletsOut();

    // 3. dibujado d los elementos
    this.drawBackground();
    this.torreta.torretaDraw();
    this.aircraftArr.forEach((eachAircraft) => {
      eachAircraft.aircraftDraw();
    });
    this.bulletArr.forEach((eachBullet) => {
      eachBullet.bulletDraw();
    });
    // this.aircraft.aircraftDraw();
    // 4. recursion
    requestAnimationFrame(this.gameLoop);
  };
}
