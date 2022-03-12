//Симулятор муравейника//

class Control {
    constructor() {
        this.fps = 128;
        setInterval(() => this.update(), this.fps);
    }

    update() {
        view.draw();
    }
}