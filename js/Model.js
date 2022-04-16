//Симулятор муравейника//

class Model {
    constructor() {
        this.base = 5;
        this.food = 5;

        this.numFood  = 20;
        this.nunRock  = 20;
        this.numBlock = 20;

        this.listColony = [];
        this.listFood = [];
        this.listRock = [];
        this.listBlock= [];
        
        for(let i = 0; i < this.base; i++) {
            let colony = new Colony(this.food, i);
            this.listColony.push(colony);
        }
        
        for(let i = 0; i < this.numFood; i++) {
            let food = new Food();
            this.listFood.push(food);
        }
        for(let i = 0; i < this.nunRock; i++) {
            let rock = new Rock();
            this.listRock.push(rock);
        }
        for(let i = 0; i < this.numBlock; i++) {
            let block = new Block();
            this.listBlock.push(block);
        }
    }
    
    update() {
        for(let colony of this.listColony) {
            for(let ant of colony.listAnt)
                ant.update();
            colony.update();
        }
    }
}