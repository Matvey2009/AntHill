//Симулятор муравейника//

class Items {
    constructor(pos) {
        this.pos = {
            x: pos.x,
            y: pos.y
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
    constructor(pos, weight) {
        super(pos);
        this.color = 'Khaki';
        this.weight = weight;
    }
    
    draw(ctx) {
        super.draw(ctx);
        if(control.info) {
            ctx.fillStyle = this.color;
            ctx.found = "6py Arial";
            ctx.fillText(Math.round(this.weight), this.pos.x, this.pos.y+10)
        }
    }
}

class Rock extends Items {
    constructor(pos) {
        super(pos);
        this.color = 'Gray';
    }
}   

class Block extends Items {
    constructor(pos) {
        super(pos);
        this.color = 'Black';
    }
}

class Label {
    constructor(pos, color) {
        this.pos = {
            x: pos.x,
            y: pos.y
        }
        this.color = color;
        this.weight = 1024;
    }

    update() {
        this.weight--;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.fillRect(this.pos.x, this.pos.y, 1, 1);
        ctx.fill();
        ctx.closePath();
    }
}