//Симулятор муравейника//

class Model {
    constructor() {
        this.size = {
            width : innerWidth,
            height: innerHeight
        }
        this.base = 5;
        this.food = 5;

        this.numFood  = 20;
        this.nunRock  = 20;
        this.numBlock = 20;

        this.map = [];
        this.air = [];
        this.listColony=[];
        this.listFood = [];
        this.listRock = [];
        this.listBlock= [];

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
            let colony = new Colony(this.food, i);
            this.listColony.push(colony);
            this.map[colony.pos.x][colony.pos.y] = colony;
        }
        for(let i = 0; i < this.numFood; i++) {
            let food = new Food();
            this.listFood.push(food);
            this.map[food.pos.x][food.pos.y] = food;
        }
        for(let i = 0; i < this.nunRock; i++) {
            let rock = new Rock();
            this.listRock.push(rock);
            this.map[rock.pos.x][rock.pos.y] = rock;
        }
        for(let i = 0; i < this.numBlock; i++) {
            let block = new Block();
            this.listBlock.push(block);
            this.map[block.pos.x][block.pos.y] = block;
        }
    }
    
    update() {
        for(let colony of this.listColony) {
            for(let ant of colony.listAnt)
                ant.update();
            colony.update();
        }
    }

    vision(ant) {
        for(let x = ant.pos.x-ant.range; x < ant.pos.x+ant.range; x++) 
            for(let y = ant.pos.y-ant.range; y < ant.pos.y+ant.range; y++) 
                if(this.map[x][y])
                    ant.listItem.push(this.map[x][y]);
    }
}