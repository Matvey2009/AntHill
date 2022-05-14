//Симулятор муравейника//

class Control {
    constructor() {
        this.fps = 40;
        this.focus = false
        this.play = true;

        this.btnPlay = document.getElementById('play');
        this.btnClear = document.getElementById('clear');
        this.btnSave = document.getElementById('save');
        this.btnPlay.addEventListener('click', this.game.bind(this));
        this.btnClear.addEventListener('click', this.clear.bind(this));
        this.info = false;
        this.label = false;
        setInterval(() => this.update(), this.fps);
        onclick = (e) => this.onClcik(e);
        onkeydown = (e) => this.onKeyDown(e);
    }

    update() {
        if(this.play)
            model.update();
        view.draw();
    }

    onClcik(e) {
        if(!this.focus){
            let food = new Food();
            food.pos = {
                x: e.clientX,
                y: e.clientY
            }
            model.listFood.push(food);
            model.map[food.pos.x][food.pos.y] = food;
            this.focus = false;
        }
    }

    onKeyDown(e) {
        if(e.keyCode == 18)
            this.info = !this.info;
        if(e.keyCode == 17)
            this.label = !this.label;
    }

    game() {
        this.play = !this.play;
        this.btnName();
        this.focus = true;
    }

    clear() {
        this.btnName();
        model = new Model();
        this.focus = true;
    }
    
    btnName() {
        if(this.play)
            this.btnPlay.innerHTML = "<i class='fa fa-pause' aria-hidden='true'></i>"
        else
            this.btnPlay.innerHTML = "<i class='fa fa-play' aria-hidden='true'></i>";
    } 
}