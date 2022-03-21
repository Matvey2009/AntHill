//Симулятор муравейника//

class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.fw = new Flyweight();
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
    }
}
//Цвет Maroon