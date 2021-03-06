//Симулятор муравейника//

class Colony {
    constructor(pos, food, i) {
        this.pallet = ['Crimson', 'DarkCyan', 'SeaGreen', 'DimGrey', 'DarkMagenta'];
        this.color = this.getColor(i);
        this.food = food;
        this.ai = new PI();
        this.pos = { 
            x: pos.x,
            y: pos.y
        }
        this.listAnt = [];
        this.timer = 100;
        this.delay = this.timer / 4;
        this.frag = 0;
        this.lose = 0;
    }

    //Обновление(Повторение)
    update() {
        if(this.food > 100)
            this.delay--;
        if (this.delay < 0) {
            this.listAnt.push(new Ant(this));
            this.food -= 100;
            this.delay = this.timer;
        }

        let listAnt = [];
        for(let ant of this.listAnt) {
            ant.update();
            if (ant.life < -100) {
                model.newFood(model.rndPos(and.pos, 100));
                this.lose += 1;
            } else
                listAnt.push(ant);
        }
        this.listAnt = listAnt;  
        if (this.listAnt.length <= 0 && this.food < 100 && this.food > 0) {
            this.color = 'rgba(0, 0, 0, 0.50)';
            model.newFood(model.rndPos(this.pos, 4), this.food);
            this.food = 0;
        }
        model.map[this.pos.x][this.pos.y] = this;
    }

    //Отрисовка
    draw(ctx) {
        let grad = ctx.createRadialGradient(this.pos.x, this.pos.y, 8, this.pos.x, this.pos.y, 32);
        grad.addColorStop(0, this.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 32, 0, Math.PI*2);
        ctx.fill(); 
        ctx.closePath();

        
        if(control.label) {
            ctx.found = "1pt Arial";
            ctx.fillStyle = "white";
            ctx.fillText(this.listAnt.length, this.pos.x, this.pos.y-4)
            ctx.fillStyle = "DarkRed";
            ctx.fillText(this.frag, this.pos.x-4, this.pos.y+4)
            ctx.fillStyle = "black";
            ctx.fillText(this.frag, this.pos.x+4, this.pos.y+4)
        }
    }

    //Подор случайного цвета колонии
    getColor(i) {
        if (i<this.pallet.length)
            return this.pallet[i];
        else
            return '#'+Math.floor(Math.random()*16777216).toString(16).padStart(6, '0');
    }
}
