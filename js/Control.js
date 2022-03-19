//Симулятор муравейника//

class Control {
    constructor() {
        this.fps = 1;
        setInterval(() => this.update(), this.fps);
    }

    update() {
        view.draw();
    }
}