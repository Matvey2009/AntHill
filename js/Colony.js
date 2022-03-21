//Симулятор муравейника//

class Colony {
    constructor(family) {
        this.color = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
        this.x = Math.round(Math.random() * window.innerWidth);
        this.y = Math.round(Math.random() * window.innerHeight);
        this.listAnt = [];
        for (let i = 0; i < family; i++) {
            let ant = new Ant(this.color, this.x, this.y);
            this.listAnt.push(ant);
        }
    }

    draw(ctx) {
        let grad = ctx.createRadialGradient(this.x, this.y, 8, this.x, this.y, 32);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 32, 0, Math.PI*2);
        ctx.fill(); 
        ctx.closePath();
    }
}
