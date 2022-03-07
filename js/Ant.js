class Ant {
    constructor(ctx) {
        this.ctx = ctx;
    }

    draw() {
        this.ctx.fillStyle='black';
        this.ctx.beginPath();
        this.ctx.arc(200, 300, 50, 0, 2*Math.PI);
        this.ctx.arc(200, 200, 50, 0, 2*Math.PI);
        this.ctx.arc(200, 100, 50, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
}