const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', ()=>{
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');

    canvasEl.width = 200;
    canvasEl.height = 200;

    m = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: '#00FF00' });
    a = new Asteroid({pos: [50, 50]});
    m.draw(ctx);
    m.move(ctx);
    m.draw(ctx);
    a.move(ctx);
    a.draw(ctx);
});