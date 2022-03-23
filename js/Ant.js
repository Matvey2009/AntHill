class Ant {
    constructor(color, pos) {
        this.pos = {
            x: Math.round(Math.random() * 400 + pos.x - 200),
            y: Math.round(Math.random() * 400 + pos.y - 200)
        }

        this.target = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        }
        this.col = color;
        this.pose = false;
        this.speed = 2;
        this.ang = this.getAngle(this.pos, this.target);
    }

    update() {  
        let ang = this.ang - Math.PI / 2;
        this.pos.x = Math.round(this.pos.x + this.speed * Math.cos(ang));
        this.pos.y = Math.round(this.pos.y + this.speed * Math.sin(ang));
    }

    draw(ctx, fw) {
        this.update();
        let x = this.pos.x;
        let y = this.pos.y;
        let ang = this.ang;
        let col = this.col;
        let pose = this.pose;
        
        //Каркас
        this.pose = !this.pose;
        ctx.fillStyle=col;
        ctx.strokeStyle='black';
        ctx.lineWidth = 1,9;
        //Поворот
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        ctx.translate(-x, -y);

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
    }

    getAngle(pos, target) {
        return Math.atan2(target.y - pos.y,  target.x - pos.x) + Math.PI / 2;
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