class Ant {
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
    }

    draw() {
        //Круги
        //Верхний круг
        this.ctx.fillStyle='brown';
        this.ctx.beginPath();
        this.x += 1;
        this.ctx.arc(100, 100, 10, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        //Центральный круг
        this.ctx.fillStyle='brown';
        this.ctx.beginPath();
        this.ctx.ellipse(100, 115, 10, 15, 0, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
        //Нижний круг
        this.ctx.fillStyle='brown';
        this.ctx.beginPath();
        this.ctx.ellipse(100, 135, 12, 15, 0, 0, 2*Math.PI);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();

        //Правый усик
        this.ctx.beginPath();
        this.ctx.moveTo(95, 91)
        this.ctx.lineTo(85, 85)
        this.ctx.lineTo(85, 75)
        this.ctx.stroke();
        this.ctx.closePath();

        //Левый усик
        this.ctx.beginPath();
        this.ctx.moveTo(105, 91)
        this.ctx.lineTo(115, 85)
        this.ctx.lineTo(115, 75)
        this.ctx.stroke();
        this.ctx.closePath();

        //Лапки
        //Верхнея-правая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(110, 110)
        this.ctx.lineTo(125, 100)
        this.ctx.lineTo(135, 105)
        this.ctx.stroke();
        this.ctx.closePath();

        //Верхнея-левая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(90, 110)
        this.ctx.lineTo(75, 100)
        this.ctx.lineTo(65, 105)
        this.ctx.stroke();
        this.ctx.closePath();

        //Центральная-правая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(110, 115)
        this.ctx.lineTo(130, 115)
        this.ctx.lineTo(140, 120)
        this.ctx.stroke();
        this.ctx.closePath();

        //Центральная-левая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(90, 115)
        this.ctx.lineTo(70, 115)
        this.ctx.lineTo(60, 120)
        this.ctx.stroke();
        this.ctx.closePath();

        //Нижнея-правая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(110, 120)
        this.ctx.lineTo(125, 130)
        this.ctx.lineTo(135, 160)
        this.ctx.stroke();
        this.ctx.closePath();

        //Нижнея-левая лапка
        this.ctx.beginPath();
        this.ctx.moveTo(90, 120)
        this.ctx.lineTo(75, 130)
        this.ctx.lineTo(65, 160)
        this.ctx.stroke();
        this.ctx.closePath();
    }
}