//Симулятор муравейника//

class Model {
    constructor() {
        this.colony = 2;
        this.family = 100;
        this.listColony = [];
        for(let i = 0; i < this.colony; i++) {
            let colony = new Colony(this.family);
            this.listColony.push(colony);
        }
    }
}