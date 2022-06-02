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
        this.btnSave.addEventListener('click', this.save.bind(this));
        this.info = false;
        this.label = false;
        setInterval(() => this.update(), this.fps);
        onclick = (e) => this.onClcik(e);
        onkeydown = (e) => this.onKeyDown(e);
    }

    //Обновление(Повторение)
    update() {
        if(this.play)
            model.update();
        view.draw();
    }

    //Создание корма по нажатию мышки
    onClcik(e) {
        if(!this.focus){
            model.newFood(model.rndPos({x: e.clientX, y: e.clientY}, 8));
            this.focus = false;
        }
    }

    //Показ информации по нажатию кнопок
    onKeyDown(e) {
        if(e.keyCode == 18)
            this.info = !this.info;//Показ информации
        if(e.keyCode == 17)
            this.label = !this.label; //Показ меток
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

    save() {
        var blob = new Blob(["My first txt file."],
            { type: "text/plain;charset=utf-8" });
        saveAs(blob, "static.txt");
    }
}