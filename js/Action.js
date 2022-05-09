//Симулятор муравейника//

class Action {

    static listAction = [
        Action.wait, 
        Action.find,
        Action.back,
        Action.mоve,
        Action.grab,
        Action.kick,
        Action.dead,
        Action.drop,
        Action.flex,
        Action.info
    ];

    static wait(ant) {
        ant.timer = 40;
        ant.walk = false;
    }

    static find(ant) {
        ant.goal = Food;
        ant.timer = 40;
        ant.walk = true;
        ant.target = {pos: model.rndPos(ant.pos, ant.range)};
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    static back(ant) {
        ant.timer = 40;
        ant.walk = true;
        ant.goal = Colony;
        ant.target = {pos: model.rndPos(ant.pos, ant.range)};
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    static mоve(ant) {
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed - 10);
        ant.walk = true;
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    static grab(ant) {
        ant.goal = Colony;
        ant.timer = 40;
        ant.walk = false;
        let food = Math.min(ant.target.weight, ant.life/2);
        ant.target.weight -= food;
        ant.load = new Food();
        ant.load.weight = food;
        ant.speed = 1 - ant.load.weight/100;
        //Если корм = 0 то удалить его с карты
        
    }

    static kick(ant) {
        ant.timer = 40;
        ant.walk = false;
        // Укусить вражеского  муравья
    }

    static dead(ant) {
        ant.timer = 40;
        ant.walk = false;
        // Ничего не делать
    }

    static drop(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.target.food += ant.load.weight;
        ant.load = false;
        ant.goal = constructor;
        ant.speed = 1.0;
    }

    static flex(ant){
        ant.timer = 40;
        ant.walk = false;
        ant.goStep();

    }

    static info(ant) {
        ant.timer = 40;
        ant.walk = false;
    }
}