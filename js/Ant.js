class Ant {
    constructor(colony) {
        this.color = colony.color;
        this.pos = {
            x: colony.pos.x+3,
            y: colony.pos.y+3
        }
        this.action = Action.find;
        this.ai = colony.ai;
        this.goal = constructor;

        this.life = 100;
        this.range = 50;
        this.target = {pos: model.rndPos(this.pos, this.range)};
        this.pose = false;
        this.timer = 0;
        this.speed = 1.0;
        this.ang = this.getAngle(this.pos, this.target);
        this.load = false;
        this.walk = false;
        this.step = 0;
    }

    update() { 
        this.timer--;
        if (this.timer <= 0) {
            if (this.life <= 0) 
                this.action = Action.dead;
            else {
                this.life -= 1;
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
            ctx.fillText(this.action.name + " " + this.timer + " " + this.pose, x, y-20);
            
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, 2, 0, 2*this.Pi2);
            ctx.fill();
            ctx.closePath();
        }

        //Супер-мега-гипер-ультра-крутой-красивый-мощный-резкий-быстрый-кручённый танец
        if(this.action == Action.flex) {
            this.goStep()
            this.angle += 0.5;
        }
    }

    getAngle(pos, target) {
        return Math.atan2(target.pos.y - pos.y,  target.pos.x - pos.x) + Math.PI / 2;
    }

    goStep() {
        let pos = {x: Math.round(this.pos.x), y: Math.round(this.pos.y)}
        model.map[pos.x][pos.y] = false;
        this.step++;
        if(this.step > 5) {
            this.pose = !this.pose;
            this.step = 0;
            if(this.pose) {
                model.newLabel(pos, this.color);
            }
        }
        let angle = this.angle-Math.PI/2;
        this.pos.x += this.speed * Math.cos(angle);
        this.pos.y += this.speed * Math.sin(angle);
        pos = {x:Math.round(this.pos.x),y:Math.round(this.pos.y)}
        model.map[pos.x][pos.y] = false;
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