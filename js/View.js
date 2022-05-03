//Симулятор муравейника//

class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
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
    }
}
//Цвет Maroon