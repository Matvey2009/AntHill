class Ant {
    constructor() {
        this.size = 5;
        this.pose = false;
    }

    draw(x, y, ang, col) {
        //Каркас
        let size1 = this.size;
        let size2 = this.size*2;
        let size3 = this.size*5;
        let size4 = this.size*3;
        let size5 = this.size*7;
        let size6 = this.size*6;
        let size7 = this.size*4;
        let size8 = this.size*8;
        let size9 = this.size*12;

        let ctx = view.ctx;
        this.pose = !this.pose;
        ctx.fillStyle=col;
        ctx.strokeStyle='black';
        //Поворот
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(ang);
        ctx.translate(-x, -y);

        //Верхнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+size1, y+size2)
        ctx.lineTo(x+size3, y)
        ctx.lineTo(x+size5, y+size1)
        ctx.stroke();
        ctx.closePath();

        //Верхнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-size1, y+size2)
        ctx.lineTo(x-size3, y)
        ctx.lineTo(x-size5, y+size1)
        ctx.stroke();
        ctx.closePath();

        //Центральная-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+size1, y+size4)
        ctx.lineTo(x+size6, y+size4)
        ctx.lineTo(x+size8, y+size7)
        ctx.stroke();
        ctx.closePath();

        //Центральная-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-size1, y+size4)
        ctx.lineTo(x-size6, y+size4)
        ctx.lineTo(x-size8, y+size7)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+size1, y+size7)
        ctx.lineTo(x+size3, y+size6)
        ctx.lineTo(x+size5, y+size9)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-size1, y+size7)
        ctx.lineTo(x-size3, y+size6)
        ctx.lineTo(x-size5, y+size9)
        ctx.stroke();
        ctx.closePath();

        //Центральный круг
        ctx.beginPath();
        ctx.ellipse(x, y+size4, size1, size4, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Верхний круг
        ctx.beginPath();
        ctx.arc(x, y-size1, size2, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        //Нижний круг
        ctx.beginPath();
        ctx.ellipse(x, y+size5, size2, size4, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Левый усик
        ctx.beginPath();
        ctx.moveTo(x-size1, y-size2)
        ctx.lineTo(x-size2, y-size4)
        ctx.lineTo(x-size4, y-size6)
        ctx.stroke();
        ctx.closePath();

        //Правый усик
        ctx.beginPath();
        ctx.moveTo(x+size1, y-size2 )
        ctx.lineTo(x+size2, y-size4)
        ctx.lineTo(x+size4, y-size6)
        ctx.stroke();
        ctx.closePath();

        ctx.restore(); 
    }
}