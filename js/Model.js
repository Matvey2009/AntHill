//Симулятор муравейника//

class Model {
    constructor() {
        this.size = {
            width : window.innerWidth,
            height: window.innerHeight
        };
        this.base = 2;
        this.food = 2560;

        this.numFood  = 0;
        this.nunRock  = 20;
        this.numBlock = 20;

        this.map = [];
        this.air = [];
        this.listColony= [];
        this.listFood  = [];
        this.listRock  = [];
        this.listBlock = [];
        this.listLabel = [];

        this.sector = {left: 0, right: 0, top: 0, bottom: 0};
        this.init();
    }

    //Создание объектов
    init() {
        for(let x = 0; x < this.size.width; x++) {
            this.map[x] = [];
            this.air[x] = [];
            for(let y = 0; y < this.size.height; y++) {
                this.map[x][y] = false;
                this.air[x][y] = false;
            }
        }
        for(let i = 0; i < this.base; i++) {
            let radius = Math.min(this.size.width, this.size.height);
            radius = (radius - radius / this.base)/2 ;
            let angle = Math.PI*2/this.base*i;
            angle += -Math.PI/2+Math.PI/this.base*(this.base+1%2);
            let pos = {
                x: this.size.width/2 + radius * Math.cos(angle),
                y: this.size.height/2 + radius * Math.sin(angle)
            }

            let colony = new Colony(this.rndPos(pos), this.food, i);
            this.listColony.push(colony);
            this.map[colony.pos.x][colony.pos.y] = colony;
        }
        for(let i = 0; i < this.numFood; i++) {
            if (i % 2 == 0)
                this.newFood(this.rndPos({x:this.size.width/2, y:this.size.height/2}, 100));
            else
                this.newFood(this.rndPos());
        }
        for(let i = 0; i < this.nunRock; i++) {
            let rock = new Rock(this.rndPos());
            this.listRock.push(rock);
            this.map[rock.pos.x][rock.pos.y] = rock;
        }
        for(let i = 0; i < this.numBlock; i++) {
            let block = new Block(this.rndPos());
            this.listBlock.push(block);
            this.map[block.pos.x][block.pos.y] = block;
        }
    }

    //Создание нового корма
    newFood(pos = {x:this.size.width/2, y:this.size.height/2}, weight = Math.round(Math.random()*128+128)) {
        let food = new Food(pos, weight);
        this.listFood.push(food);
        this.map[food.pos.x][food.pos.y] = food;
    }
    
    //Обновление(Повторение)
    update() {
        for(let colony of this.listColony) {
            colony.update();
        }

        let listLabel = [];
        for(let label of this.listLabel) {
            label.update();
            if (label.weight <= 0) 
                this.air[label.pos.x][label.pos.y] = false;
            else
                listLabel.push(label);
        }
        this.listLabel = listLabel;

        let listFood = [];
        for(let food of this.listFood) {
            if (food.weight <= 0) 
                this.map[food.pos.x][food.pos.y] = false;
            else
                listFood.push(food);
        }
        this.listFood = listFood;
    }


    //Удаление корма
    delFood () {
        let listFood = [];
        for(let food of this.listFood) {
            if (food.weight <= 0) 
                this.map[food.pos.x][food.pos.y] = false;
            else
                listFood.push(food);
        }
        this.listFood = listFood;
    }
    
    //Рандоманая позицыя
    rndPos(pos = {x: this.size.width/2 , y: this.size.height/2}, range = Math.max(this.size.width, this.size.height)) {
        pos = this.intPos(pos);
        this.sector = this.getSector(pos, range);
        while (this.map[pos.x][pos.y] !== false) {
            pos = {
                x: Math.random() * (this.sector.right-this.sector.left)+this.sector.left,
                y: Math.random() * (this.sector.bottom-this.sector.top)+this.sector.top 
            };
            pos = this.intPos(pos);
        }
        return pos;
    }

    //Создание новой метки
    newLabel(pos, color) {
        if (this.air[pos.x][pos.y] != false) {
            if (this.air[pos.x][pos.y].color == color)
                this.air[pos.x][pos.y].weight = Math.min(8192, this.air[pos.x][pos.y].weight + 1024);
            else
                if (this.air[pos.x][pos.y].weight < 1024) {
                    this.air[pos.x][pos.y].weight = 1024;
                    this.air[pos.x][pos.y].color = color;
                } else
                    this.air[pos.x][pos.y].weight = -1;
        } else {
            let label = new Label(pos, color);
            this.listLabel.push(label);
            this.air[pos.x][pos.y] = label;
        }
    }

    //Обзор
    getSector(pos, range) {
        return {
            left: Math.max(0, pos.x-range),
            right: Math.min(this.size.width, pos.x+range),
            top: Math.max(0, pos.y-range),
            bottom: Math.min(this.size.height, pos.y+range)
        }
    }

    //Поворот на цель
    delta(pos, target) {
        return Math.sqrt((pos.x-target.pos.x)**2 + (pos.y-target.pos.y)**2);
    }
    
    //Округление позиции
    intPos(pos) {
        return {
            x: Math.round(pos.x),
            y: Math.round(pos.y)
        }
    }
}