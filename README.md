# NAME OF YOUR PROYECT

## [Play the Game!](https://alvaritohegon.github.io/air-plane-hunt/)

![Game Logo](./images/logo%20(1).png)


# Description

Air Plane Hunt es un juego donde el jugador controla una torreta que dispone de infinidad de balas para parar impedir el ataque de los aviones de guerra. El juego acaba cuando 3 de estos aviones se nos cuelan por la parte izquierda de la pantalla. Cuando el juego termina, te salta a una pantalla de Game Over con la posibilidad de reiniciarlo.


# Main Functionalities

- La torreta dispara balas con la tecla `space`.
- La torreta tiene un tiempo de recarga mínimo para que no puedas hacer muchos disparos a la vez.
- Los aviones salen de la parte derecha de la pantalla desde frecuencias y posiciones aleatorias.
- El juego acaba cuando tres de los aviones se cuelan por la parte izquierda de la pantalla.


# Backlog Functionalities

- Añadir aviones que salgan de la parte izquierda de la pantalla.
- Añadir otros disparos con diferentes ángulos en la torreta.
- Añadir niveles y que en estos se agregue más dificultad.
- Añadir en la pantalla de Game Over un score con las mejores puntuaciones.


# Technologies used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- JS Canvas
- JS Classes
- Local Storage
- JS Image()


# States

- Start Screen
- Game Screen
- Game Over Screen


# Proyect Structure

## main.js

- DOM
- startGame();
- gameOver();


## Game.js

- Game ()
    - this.background;

    - this.torreta;

    - this.aircraftArr;
    
    - this.bulletArr;
    - this.isGameOn;
    - this.counter;

- gameLoop()
- aircraftsAparecen()
- bulletShot()
- checkCollisionBulletAircraft()
- gameOver()
- drawBackground()
- removeAircraftOut()
- removeBulletsOut()
- drawCounter()


## Torreta.js 
- Torreta ()
    - this.img;
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.speed;
    - this.isCounted;

- aircraftDraw()
- move()

## Aircraft.js 
- Aircraft ()
    - this.img;
    - this.x
    - this.y
    - this.w;
    - this.h;
    - this.speed;
    - this.isCounted;

- aircraftDraw()
- move()

## Bullet.js 
- Bullet ()
    - this.img;
    - this.x;
    - this.y;
    - this.w;
    - this.h;
    - this.speed;

- bulletDraw()
- bulletMove()

# Extra Links 

### Trello
[Link](https://trello.com/b/JJIY3ply/project-videogame)

### Slides
[Link](www.your-slides-url-here.com)

## Deploy
[Link](https://alvaritohegon.github.io/air-plane-hunt/)