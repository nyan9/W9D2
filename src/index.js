const MovingObject = require('./moving_object.js');
const Asteroid = require('./asteroid.js');
const GameView = require('./game_view.js');
const Game = require('./game.js');

window.MovingObject = MovingObject;

document.addEventListener('DOMContentLoaded', ()=>{
    const canvasEl = document.getElementById('game-canvas');
    const ctx = canvasEl.getContext('2d');

    canvasEl.width = 300;
    canvasEl.height = 300;

    m = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 5, color: '#00FF00' });
    
    g = new Game();
    gv = new GameView(ctx);
    a = new Asteroid({ pos: [50, 50], game: g});

    gv.start();
    // m.draw(ctx);
    // m.move(ctx);
    // m.draw(ctx);
    // a.move(ctx);
    // a.draw(ctx);


});