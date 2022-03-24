//Симулятор муравейника//

class Colony {
    constructor(family, i) {
        this.pallet = ['Red', 'Maroon', 'White', 'SaddleBrown', 'DarkKhaki', 'DimGrey'];
        this.color = this.getColor(i);
        this.pos = {        
            x: Math.round(Math.random() * (window.innerWidth-500)+250),
            y: Math.round(Math.random() * (window.innerHeight-300)+150)
        }

        this.listAnt = [];
        for (let i = 0; i < family; i++) {
            let ant = new Ant(this.color, this.pos);
            this.listAnt.push(ant);
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
