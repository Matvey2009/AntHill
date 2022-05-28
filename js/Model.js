//Симулятор муравейника//

class Model {
    constructor() {
        this.size = {
            width : window.innerWidth,
            height: window.innerHeight
        };
        this.base = 1;
        this.food = 25600;

        this.numFood  = 100;
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
            let pos = { 
                x: Math.round(Math.random() * this.size.width),
                y: Math.round(Math.random() * this.size.height)
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

    newFood(pos = {x:this.size.width/2, y:this.size.height/2}, weight = Math.round(Math.random()*128+128)) {
        let food = new Food(pos, weight);
        this.listFood.push(food);
        this.map[food.pos.x][food.pos.y] = food;
    }
    
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
    }

    rndPos(pos = {x: this.size.width/2 , y: this.size.height/2}, range = Math.max(this.size.width, this.size.height)) {
        pos = this.intPos(pos);
        this.sector = this.getSector(pos, range);
        while (this.map[pos.x][pos.y] != false) {
            pos = this.intPos({
                x: Math.random() * (this.sector.right-this.sector.left)+this.sector.left,
                y: Math.random() * (this.sector.bottom-this.sector.top)+this.sector.top 
            });
        }
        return pos;
    }

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

    getSector(pos, range) {
        return {
            left: Math.max(0, pos.x-range),
            right: Math.min(this.size.width, pos.x+range),
            top: Math.max(0, pos.y-range),
            bottom: Math.min(this.size.height, pos.y+range)
        }
    }

    delta(pos, target) {
        return Math.sqrt((pos.x-target.pos.x)**2 + (pos.y-target.pos.y)**2);
    }

    intPos(pos) {
        return {
            x: Math.round(pos.x),
            y: Math.round(pos.y)
        }
    }
}

// 1)Очки опыта. +
// 2)Нужно внести в программу такое измение что-бы при появление колоний первые 3-4 имели заданные цвета. +
// 3)Разширить функцию newLabel так что-бы одинаковые цвета сгладывались до 4096.Если разные то большнее. +
// 4)Если дважды нажмать мышку в одно место то корм появляется возле.
// 5)Функция для +