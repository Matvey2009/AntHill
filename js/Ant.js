class Ant {
    constructor(colony) {
        this.colony = colony
        this.color = colony.color;
        this.pos = model.rndPos(colony.pos, 4);
        this.action = Action.find;
        this.ai = colony.ai;

        this.life = 100;
        this.range = 60;
        this.target = {pos: model.rndPos(this.pos, this.range)};
        this.pose = false;
        this.timer = 0;
        this.speed = 1.0;
        this.ang = this.getAngle(this.pos, this.target);
        this.load = false;
        this.walk = false;
        this.step = 0;
        this.score = 0;
        this.frag = 0;
        this.listTarget = this.vision();
        if (this.ai instanceof AI) {
            this.nn = {
                w_1: [], 
                w_2: [], 
                w_3: []
            };
            this.ai.init(this);
        }
    }

    //Обновление(Повторение)
    update() { 
        this.timer--;
        this.life -= 0.01;
        if (this.timer <= 0) {
            this.pos = model.intPos(this.pos);
            this.vision();
            this.ai.select(this);
            this.action(this);
        }
        if (this.walk)
            this.goStep();
    }

    //Отрисовка
    draw(ctx, fw) {
        let x = this.pos.x;
        let y = this.pos.y;
        let angle = this.angle;
        let color = this.color;
        let pose = this.pose;
        
        //Поворот
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.translate(-x, -y);

        //Груз
        if (this.load){
            this.load.pos = {
                x : x,
                y : y-7
            }
            this.load.draw(ctx);
        }

        //Каркас
        ctx.fillStyle=color;
        ctx.strokeStyle='black';
        ctx.lineWidth = 1,9;

        //Верхнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size2)
        ctx.lineTo(x+fw.size3, y+this.pose*fw.size2)
        ctx.lineTo(x+fw.size5, y+fw.size1+this.pose*fw.size2)
        ctx.stroke();
        ctx.closePath();

        //Верхнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size2)
        ctx.lineTo(x-fw.size3, y+!this.pose*fw.size2)
        ctx.lineTo(x-fw.size5, y+fw.size1+!this.pose*fw.size2)
        ctx.stroke();
        ctx.closePath();

        //Центральная-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size4)
        ctx.lineTo(x+fw.size6, y+fw.size4+!this.pose*fw.size2)
        ctx.lineTo(x+fw.size8, y+fw.size7+!this.pose*fw.size2)
        ctx.stroke();
        ctx.closePath();

        //Центральная-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size4)
        ctx.lineTo(x-fw.size6, y+fw.size4+this.pose*fw.size2)
        ctx.lineTo(x-fw.size8, y+fw.size7+this.pose*fw.size2)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size7)
        ctx.lineTo(x+fw.size3, y+fw.size6+this.pose*fw.size3)
        ctx.lineTo(x+fw.size5, y+fw.size9+this.pose*fw.size3)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size7)
        ctx.lineTo(x-fw.size3, y+fw.size6+!this.pose*fw.size3)
        ctx.lineTo(x-fw.size5, y+fw.size9+!this.pose*fw.size3)
        ctx.stroke();
        ctx.closePath();

        //Центральный круг
        ctx.beginPath();
        ctx.ellipse(x, y+fw.size4, fw.size1, fw.size4, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Верхний круг
        ctx.beginPath();
        ctx.arc(x, y-fw.size1, fw.size2, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        //Нижний круг
        ctx.beginPath();
        ctx.ellipse(x, y+fw.size5, fw.size2, fw.size4, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Левый усик
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y-fw.size2)
        ctx.lineTo(x-fw.size2, y-fw.size4+!this.pose*fw.size2)
        ctx.lineTo(x-fw.size4, y-fw.size6+!this.pose*fw.size2)
        ctx.stroke();
        ctx.closePath();

        //Правый усик
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y-fw.size2)
        ctx.lineTo(x+fw.size2, y-fw.size4+!this.pose*fw.size)
        ctx.lineTo(x+fw.size4, y-fw.size6+!this.pose*fw.size)
        ctx.stroke();
        ctx.closePath();
        ctx.restore();

        if(control.info) {
            ctx.fillStyle = this.color;
            ctx.font = "8pt Arial";
            ctx.fillText(this.action.name + " " + this.timer, x, y+15);
            
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 2, 0, 2*this.Pi2);
            ctx.fill();
            ctx.closePath();
            ctx.fillStyle = 'red';
            if (this.target) {
                ctx.beginPath();
                ctx.fillRect(this.target.pos.x, this.target.pos.y, 2, 2);
                ctx.fill();
                ctx.closePath();
            }
        }

        //Танец
        if(this.action == Action.flex) {
            this.angle += 0.5;
        }
    }

    //Зрение
    vision() {
        this.listTarget = {
            colony: false,
            ally: false,
            allyen: false,
            food: false,
            rock: false,
            labFood: false,
            labAnt: false,
            random: false
        }
        this.pos = model.intPos(this.pos);

        for (let i = 1; i <= this.range; i++) {
            let sector = model.getSector(this.pos, i)
            for(let j = sector.left; j <= sector.right; j++){
                this.memory(model.map[j][sector.top], model.air[j][sector.top]);
                this.memory(model.map[j][sector.bottom], model.air[j][sector.bottom]);
            }
            for(let j = sector.top+1; j <= sector.bottom; j++){
                this.memory(model.map[sector.left][j], model.air[sector.left][j]);
                this.memory(model.map[sector.right][j], model.air[sector.right][j]);
            }
        }
        if (!this.load)
            this.listTarget.random = {pos: model.rndPos(this.pos, this.range)};
        else {
            let dCol = model.delta(this.pos, this.colony);
            let dRnd = dCol;
            let limit = 3;
            while (dCol <= dRnd && limit >= 0) {
                this.listTarget.random = {pos: model.rndPos(this.pos, this.range)};
                dRnd = model.delta(this.listTarget.random.pos, this.colony);
                limit--;
            }
        }
        return this.listTarget;
    }

    //Проверка координат point
    memory(point, smell ) {
        //Объекты
        if (point instanceof Colony && point.color == this.color && this.load)
            this.listTarget.colony = point;
        else if (point instanceof Ant && point.color == this.color) 
            this.listTarget.ally = point;
        else if (!this.listTarget.food && point instanceof Food)
            this.listTarget.food = point;
        else if (point instanceof Rock)
            this.listTarget.rock = point;
        else if (!this.listTarget.allyen && point instanceof Ant && point.load instanceof Food && point.color != this.color)
            this.listTarget.allyen = point;
        //Запахи
        else if (smell instanceof Label && smell.color == Food.color && (!this.listTarget.labFood || smell.weight < this.listTarget.labFood.weight))
            this.listTarget.labFood = smell;
        //else if (smell instanceof Label && smell.color == this.color) 
        //    this.listTarget.labAnt = smell;
    }


    getAngle(pos, target) {
        return Math.atan2(target.pos.y - pos.y,  target.pos.x - pos.x) + Math.PI / 2;
    }

    //Хотьба
    goStep() {
        let pos = model.intPos(this.pos);
        model.map[pos.x][pos.y] = false;
        this.step++;
        if(this.step > 5) {
            this.pose = !this.pose;
            this.step = 0;
            this.score += 1;
            if (this.pose)
                model.newLabel(pos, this.color);
            else if (this.load instanceof Food)
                model.newLabel(pos, Food.color);
        }
        let angle = this.angle-Math.PI/2;
        this.pos.x += this.speed * Math.cos(angle);
        this.pos.y += this.speed * Math.sin(angle);
        pos = model.rndPos({x: Math.round(this.pos.x), y: Math.round(this.pos.y)}, 2);
        model.map[pos.x][pos.y] = this;
    }
}