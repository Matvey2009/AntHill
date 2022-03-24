//Симулятор муравейника//

class Control {
    constructor() {
        this.fps = 0;
        this.focus = false
        this.play = true;

        this.btnPlay = document.getElementById('play');
        this.btnClear = document.getElementById('clear');
        this.btnPlay.addEventListener('click', this.game.bind(this));
        this.btnClear.addEventListener('click', this.clear.bind(this));
        
        setInterval(() => this.update(), this.fps);
        onclick = (e) => this.onClcik(e);
    }

    update() {
        if(this.play)
            model.update();
        view.draw();
    }

    onClcik = (e) => {
        if(!this.focus){
            let pos = {
                x: e.clientX,
                y: e.clientY
            }
            console.log(pos);
            this.focus = false;
        }
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