const Game = require('./game.js');
const MovingObject = require('./moving_object');

function GameView(ctx){
    this.game = new Game();
    this.ctx = ctx;

}


GameView.prototype.start  = function(){
    const that  = this;
    setInterval(function(){
        that.game.moveObjects(that.ctx);
        that.game.draw(that.ctx);
    },
    20);
}


module.exports = GameView;