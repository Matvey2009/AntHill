//Симулятор муравейника//

class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    draw() {
        this.ctx.fillStyle = 'darkgreen';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        model.ant.draw(200, 200, 1.0, 'Maroon');
    }
}