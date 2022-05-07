//Симулятор муравейника//

class Colony {
    constructor(food, i) {
        this.pallet = ['Maroon', 'White', 'SaddleBrown', 'DarkKhaki', 'DimGrey'];
        this.color = this.getColor(i);
        this.food = food;
        this.ai = new PI();
        this.pos = { 
            x: Math.round(Math.random() * (window.innerWidth-500)+250),
            y: Math.round(Math.random() * (window.innerHeight-300)+150)
        }
        this.listAnt = [];
        this.timer = 100;
        this.delay = this.timer / 4;
    }

    update() {
        if(this.food > 100)
            this.delay--;
        if (this.delay < 0) {
            this.listAnt.push(new Ant(this));
            this.food -= 100;
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

        
        if(control.info) {
            ctx.fillStyle = "black";
            ctx.found = "8pt Arial";
            ctx.fillText(this.listAnt.length, this.pos.x, this.pos.y)
        }
    }

    getColor(i) {
        if (i<this.pallet.length)
            return this.pallet[i];
        else
            return '#'+Math.floor(Math.random()*16777216).toString(16).padStart(6, '0');
    }
}
