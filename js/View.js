//Симулятор муравейника//

class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = model.size.width;
        this.canvas.height = model.size.height;
        this.fw = new Flyweight();
        this.ctx.textBaseline = "middle";
        this.ctx.textAlign = "center";
    }
    
    draw() {
        this.ctx.fillStyle = 'darkgreen';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        for(let colony of model.listColony) {
            for(let ant of colony.listAnt) {
                ant.draw(this.ctx, this.fw)
            }
            colony.draw(this.ctx);
        }

        for(let food  of model.listFood) {
            food.draw(this.ctx);
        }

        for(let rock  of model.listRock) {
            rock.draw(this.ctx);
        }

        for(let block of model.listBlock) {
            block.draw(this.ctx);
        }

        if (control.label)
        for(let label of model.listLabel) {
            label.draw(this.ctx);
        }
    }
}

class Flyweight {
    constructor() {
        this.size = 1;
        this.size = this.size;
        this.size1 = this.size;
        this.size2 = this.size*2;
        this.size3 = this.size*5;
        this.size4 = this.size*3;
        this.size5 = this.size*7;
        this.size6 = this.size*6;
        this.size7 = this.size*4;
        this.size8 = this.size*8;
        this.size9 = this.size*12;
    }
}