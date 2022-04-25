//Симулятор муравейника//

class Items {
    constructor() {
        this.pos = {
            x: Math.round(Math.random() * window.innerWidth),
            y: Math.round(Math.random() * window.innerHeight),
        }
        this.color = 'white';
        this.Pi2 = Math.PI*2;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 2, 0, 2*this.Pi2);
        ctx.fill();
        ctx.closePath();
    }
}

class Food extends Items {
    constructor() {
        super();
        this.color = 'Khaki';
    }
}

class Rock extends Items {
    constructor() {
        super();
        this.color = 'Gray';
    }
}

class Block extends Items {
    constructor() {
        super();
        this.color = 'Black';
    }
}