class Ant {
    constructor(colony) {
        this.color = colony.color;
        this.pos = {
            x: colony.pos.x,
            y: colony.pos.y
        }
        this.action = Action.find;
        this.ai = colony.ai;
        this.goal = constructor;

        this.target.pos = {pos: model.rndPos(this.pos)};
        this.pose = false;
        this.range =30;
        this.timer = 0;
        this.speed = 2;
        this.ang = this.getAngle(this.pos, this.target.pos);
        this.load = false;
        this.walk = false;
    }

    update() { 
        this.timer--;
        if (this.timer <= 0) {
            if (this.live <= 0)
                this.action = Action.dead
            else {
                this.pos = {
                    x : Math.round(this.pos.x),
                    y : Math.round(this.pos.y)
                }
                model.vision(this);
                this.ai.select(this);
                this.action(this);
            }
        }
        if (this.walk)
            this.goStep();
    }

    draw(ctx, fw) {
        let x = this.pos.x;
        let y = this.pos.y;
        let ang = this.ang;
        let color = this.color;
        let pose = this.pose;
        
        //Поворот
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        ctx.translate(-x, -y);

        if (this.load){
            this.load.pos = {
                x : x,
                y : y-7
            }
            this.load.draw(ctx);
        }

        //Корм
        //if (this.food > 0) {
        //    ctx.fillStyle='Khaki';//Food.color;
        //    ctx.beginPath();
        //    ctx.arc(x, y-7, fw.size2, 0, 2*Math.PI);
        //    ctx.fill();
        //    ctx.stroke();
        //    ctx.closePath();
        //};

        //Каркас
        ctx.fillStyle=color;
        ctx.strokeStyle='black';
        ctx.lineWidth = 1,9;

        //Верхнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size2)
        ctx.lineTo(x+fw.size3, y)
        ctx.lineTo(x+fw.size5, y+fw.size1)
        ctx.stroke();
        ctx.closePath();

        //Верхнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size2)
        ctx.lineTo(x-fw.size3, y)
        ctx.lineTo(x-fw.size5, y+fw.size1)
        ctx.stroke();
        ctx.closePath();

        //Центральная-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size4)
        ctx.lineTo(x+fw.size6, y+fw.size4)
        ctx.lineTo(x+fw.size8, y+fw.size7)
        ctx.stroke();
        ctx.closePath();

        //Центральная-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size4)
        ctx.lineTo(x-fw.size6, y+fw.size4)
        ctx.lineTo(x-fw.size8, y+fw.size7)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y+fw.size7)
        ctx.lineTo(x+fw.size3, y+fw.size6)
        ctx.lineTo(x+fw.size5, y+fw.size9)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-fw.size1, y+fw.size7)
        ctx.lineTo(x-fw.size3, y+fw.size6)
        ctx.lineTo(x-fw.size5, y+fw.size9)
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
        ctx.lineTo(x-fw.size2, y-fw.size4)
        ctx.lineTo(x-fw.size4, y-fw.size6)
        ctx.stroke();
        ctx.closePath();

        //Правый усик
        ctx.beginPath();
        ctx.moveTo(x+fw.size1, y-fw.size2)
        ctx.lineTo(x+fw.size2, y-fw.size4)
        ctx.lineTo(x+fw.size4, y-fw.size6)
        ctx.stroke();
        ctx.closePath();

        ctx.restore();
        ctx.font = "8pt Arial";
        ctx.fillText(this.action.name, x, y-20);
    }

    getAngle(pos, target) {
        return Math.atan2(target.pos.y - pos.y,  target.pos.x - pos.x) + Math.PI / 2;
    }

    goStep() {
        this.pose = !this.pose;
        let angle = this.ang-Math.PI/2;
        this.pos.x += this.speed * Math.cos(angle);
        this.pos.y += this.speed * Math.sin(angle);
    }
}

class Flyweight {
    constructor() {
        this.size = 1;
        this.size = this.size;
        this.size1 = this.size;
        this.size2 = this.size*2;
        this.size3 = this.size*5;
        this.size4 = this.size*3;
        this.size5 = this.size*7;
        this.size6 = this.size*6;
        this.size7 = this.size*4;
        this.size8 = this.size*8;
        this.size9 = this.size*12;
    }
}