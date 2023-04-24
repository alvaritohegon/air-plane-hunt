// propiedades de Game.js => todos los elementos q existen en el juego,
class Game {
    constructor() {
        // el constructor es TODOS los elementos y valores iniciales del juego.
        //el fono
        this.background = new Image();
        this.background.src = "images/background.jpg";

        this.isGameOn = true;
        //! MVP
        //los aviones 
        //la torreta 
        //la bala
        
    }

    //! MVP
    // metodos d Game => todas las acciones q se realizan en el juego.
    // aparecen los aviones de mnera aleatoria
    // que el cañón dispare
    // colisiones de la bala con los aviones

    gameLoop = () => {
        console.log("ejecutando recursión del juego");

        // 1. limpieza del canvas
        // 2. acciones y movimientos d los elementos 
        // 3. dibujad d los elementos
        // 4. recursion
        requestAnimationFrame(this.gameLoop)
    }

}