function MovingObject(args){
    this.pos = args.pos;
    this.vel = args.vel;
    this.radius = args.radius;
    this.color = args.color;
}

MovingObject.prototype.draw = function(context){
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(
        this.pos[0],
        this.pos[1],
        this.radius,
        0,
        2*Math.PI,
        false
    );
    context.stroke();
    context.fill();
}

MovingObject.prototype.move = function(context){
    this.pos[0] += this.vel[0];
    this.pos[1] += this.vel[1];
}

module.exports = MovingObject;