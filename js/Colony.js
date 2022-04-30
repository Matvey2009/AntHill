//Симулятор муравейника//

class Colony {
    constructor(food, i) {
        this.pallet = ['Red', 'Maroon', 'White', 'SaddleBrown', 'DarkKhaki', 'DimGrey'];
        this.color = this.getColor(i);
        this.food = food;
        this.ai = new AI();
        this.pos = { 
            x: Math.round(Math.random() * (window.innerWidth-500)+250),
            y: Math.round(Math.random() * (window.innerHeight-300)+150)
        }
        this.listAnt = [];
        this.timer = 100;
        this.delay = this.timer / 4;
    }

    update() {
        if(this.food > 0) {
            this.delay--;
        }
        if (this.delay < 0) {
            let ant = new Ant(this);
            this.listAnt.push(ant);
            this.food--;
            this.delay = this.timer;
        }
    }

    draw(ctx) {
        let grad = ctx.createRadialGradient(this.pos.x, this.pos.y, 8, this.pos.x, this.pos.y, 32);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 32, 0, Math.PI*2);
        ctx.fill(); 
        ctx.closePath();
    }

    getColor(i) {
        if (i<this.pallet.length)
            return this.pallet[i];
        else
            return '#'+Math.floor(Math.random()*16777216).toString(16).padStart(6, '0');
    }
}
