const MovingObject = require('./moving_object.js');
const Util = require('./utils.js');

Util.inherits(Asteroid, MovingObject);

function Asteroid(args) {
  this.color = 'red';
  this.radius = 20;
  this.vel = Util.randomVec(30*Math.random());
  this.pos = args.pos;

  // MovingObject.call(this, arguments);
}

module.exports = Asteroid;