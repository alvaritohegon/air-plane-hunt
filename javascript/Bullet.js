class Bullet {
  constructor() {
    this.img = new Image();
    this.img.src = "images/bala.png";
    this.x = 285; 
    this.y = 330; 
    this.w = 30; 
    this.h = 30; 
    this.speed = 2;
  }

  // metodos (acciones de la torreta)
  bulletDraw = () => {
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  };
    
  bulletMove = () => {
    this.y -= this.speed
  }
}


