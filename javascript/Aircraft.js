class Aircraft {
  constructor( positionY ) {
    // propiedades de cada avión

    this.img = new Image();
    this.img.src = "images/avion.png"; 
    //?ces la img de la izq o de la der?

    this.x = canvas.width;
    this.y = positionY;
    
    this.w = 60;
    this.h = 90;
    this.speed = 2;
  }

  // metodos (acciones) de los aviones

  aircraftDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
  }
    
  // los aviones se mueven de izq a der y viceversa!
  move = () => {
    this.x -= this.speed
  }

}
