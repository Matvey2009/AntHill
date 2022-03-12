//Симулятор муравейника//

class View {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    draw() {
        this.ctx = this.canvas.getContext('2d');
        model.ant.draw(this.ctx);
    }
}