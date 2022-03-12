class Ant {
    constructor() {
        this.pos = {y: 100, x: 100};
    }

    draw(ctx) {
        let x = this.pos.x;
        let y = this.pos.y;
        //Лапки
        //Верхнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+5, y+10)
        ctx.lineTo(x+25, y)
        ctx.lineTo(x+35, y+5)
        ctx.stroke();
        ctx.closePath();

        //Верхнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-5, y+10)
        ctx.lineTo(x-25, y)
        ctx.lineTo(x-35, y+5)
        ctx.stroke();
        ctx.closePath();

        //Центральная-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+5, y+15)
        ctx.lineTo(x+30, y+15)
        ctx.lineTo(x+40, y+20)
        ctx.stroke();
        ctx.closePath();

        //Центральная-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-5, y+15)
        ctx.lineTo(x-30, y+15)
        ctx.lineTo(x-40, y+20)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-правая лапка
        ctx.beginPath();
        ctx.moveTo(x+5, y+20)
        ctx.lineTo(x+25, y+30)
        ctx.lineTo(x+35, y+60)
        ctx.stroke();
        ctx.closePath();

        //Нижнея-левая лапка
        ctx.beginPath();
        ctx.moveTo(x-5, y+20)
        ctx.lineTo(x-25, y+30)
        ctx.lineTo(x-35, y+60)
        ctx.stroke();
        ctx.closePath();

        //Центральный круг
        ctx.fillStyle='Maroon';
        ctx.beginPath();
        ctx.ellipse(x, x+15, 8, 15, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Верхний круг
        ctx.fillStyle='Maroon';
        ctx.beginPath();
        ctx.arc(x, y-5, 10, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        
        //Нижний круг
        ctx.fillStyle='Maroon';
        ctx.beginPath();
        ctx.ellipse(x, x+35, 12, 15, 0, 0, 2*Math.PI);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();

        //Левый усик
        ctx.beginPath();
        ctx.moveTo(x-5, y-9)
        ctx.lineTo(x-10, y-15)
        ctx.lineTo(x-15, y-30)
        ctx.stroke();
        ctx.closePath();

        //Правый усик
        ctx.beginPath();
        ctx.moveTo(x+5, y-9 )
        ctx.lineTo(x+10, y-15)
        ctx.lineTo(x+15, y-30)
        ctx.stroke();
        ctx.closePath();

        
    }
}