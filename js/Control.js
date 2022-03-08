//Симулятор муравейника//

class Control {
    constructor(view) {
        this.view = view;
        this.fps = 128;
        setInterval(() => this.update(), this.fps);
    }

    update() {
        this.view.draw();
    }
}