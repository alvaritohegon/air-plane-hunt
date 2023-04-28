class Torreta {
  constructor() {
    // propiedades del pollito
    this.img = new Image();
    this.img.src = "images/torreta.png";
    this.x = 270; //esto define la posicion x
    this.y = 330; // esto define la posición en el eje Y
    this.w = 70; // ancho de la torreta
    this.h = 70; // altod de la torreta
  }

  // metodos (acciones de la torreta)

  // dibujar la torreta
  torretaDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
}
