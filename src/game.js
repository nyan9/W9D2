const Asteroid = require("./asteroid");

function Game(){
  const DIM_X = 300;
  const DIM_Y = 300;
  const NUM_ASTEROIDS = 25;
  this.asteroids = [];
  this.addAsteroids();
}

Game.prototype.randomPosition = function () {
  return [DIM_X * Math.random(), DIM_X * Math.random()];
}

Game.prototype.addAsteroids = function () {
  for(let i=0; i<NUM_ASTEROIDS; i++) {
    this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
  }  
}

Game.prototype.draw = function (ctx) {
  ctx.clearRect();
  this.asteroids.forEach( function (a) {
    a.draw(ctx);
  })
}

Game.prototype.moveObjects = function (ctx) {
  this.asteroids.forEach( function (a) {
    a.move(ctx);
  })
}