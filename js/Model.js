//Симулятор муравейника//

class Model {
    constructor() {
        this.colony = 8;
        this.family = 100;

        this.numFood  = 20;
        this.nunRock  = 20;
        this.numBlock = 20;

        this.listColony = [];
        this.listFood = [];
        this.listRock = [];
        this.listBlock= [];
        
        for(let i = 0; i < this.colony; i++) {
            let colony = new Colony(this.family, i);
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
}