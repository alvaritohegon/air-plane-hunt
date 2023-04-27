// propiedades de Game.js => todos los elementos q existen en el juego,
class Game {
  constructor() {
    // el constructor es TODOS los elementos y valores iniciales del juego.
    //el fono
    this.background = new Image();
    this.background.src = "images/background.jpg";

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
    this.isGameOn = true;

    // contador d vidas

    this.counter = 3;
  }

  //! MVP
  // metodos d Game => todas las acciones q se realizan en el juego.
  aircraftsAparecen = () => {
    if (
      this.aircraftArr.length === 0 ||
      this.aircraftArr[this.aircraftArr.length - 1].x < 200
    ) {
      const y = Math.floor(Math.random() * 201); // generacion random entre 0 y 200
      let nuevoAircraft = new Aircraft(y); // crear nuevo avion con posicion random
      this.aircraftArr.push(nuevoAircraft);
    }
  };

  bulletShot = () => {
    if (
      this.bulletArr.length === 0 ||
      this.bulletArr[this.bulletArr.length - 1].y < 150
    ) {
      let nuevaBullet = new Bullet();
      this.bulletArr.push(nuevaBullet); // añade una bala
    }
  };

  // colisiones de la bala con los aviones
  checkCollisionBulletAircraft = () => {
    this.aircraftArr.forEach((eachAircraft) => {
      this.bulletArr.forEach((eachBullet) => {
        if (
          eachAircraft.x < eachBullet.x + eachBullet.w &&
          eachAircraft.x + eachAircraft.w > eachBullet.x &&
          eachAircraft.y < eachBullet.y + eachBullet.h &&
          eachAircraft.h + eachAircraft.y > eachBullet.y
        ) {
          console.log(" ha colisionado");
          const aircraftIndex = this.aircraftArr.indexOf(eachAircraft);
          const bulletIndex = this.bulletArr.indexOf(eachBullet);
          this.aircraftArr.splice(aircraftIndex, 1);
          this.bulletArr.splice(bulletIndex, 1);
        }
      });
      if (eachAircraft.x <= 0 && !eachAircraft.isCounted) {
        // comprueba si el avion ya ha sido contado
        eachAircraft.isCounted = true; // marca el avión como contado
        this.counter--;
        if (this.counter <= 0) {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    // detener el juego
    this.isGameOn = false;

    // ocultar el canvas
    canvas.style.display = "none";

    // mostramos la pantalla final
    gameoverScreenDOM.style.display = "flex";
  };

  drawBackground = () => {
    ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height);
  };

  removeAircraftOut = () => {
    if (
      this.aircraftArr.length !== 0 &&
      this.aircraftArr[0].x + this.aircraftArr[0].w < 0
    ) {
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

  drawCounter = () => {
    ctx.font = "25px serif";

    ctx.strokeText(this.counter, 300, 30);
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
    this.checkCollisionBulletAircraft();
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
    this.drawCounter();
    // this.aircraft.aircraftDraw();
    // 4. recursion
    if (this.isGameOn === true) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
