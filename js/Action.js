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
        ant.walk = true;
        ant.target = {pos: model.rndPos(ant.pos, ant.range)};
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed);
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    static back(ant) {
        ant.walk = true;
        ant.goal = Colony;
        ant.target = {pos: model.rndPos(ant.pos, ant.range)};
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed);
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
        ant.load = new Food(ant.pos, food);
        ant.speed = 0.7;
        ant.score += 50;
        //Если корм = 0 то удалить его с карты
        
    }

    static kick(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.score += 25;
        // Укусить вражеского  муравья
    }

    static dead(ant) {
        ant.goal = constructor;
        ant.timer = 40;
        ant.walk = false;
        ant.color = 'rgba(0, 0, 0, 0.50)';
        if(ant.load.weight)
            ant.Action = Action.drop;
        ant.target = false;
        // Ничего не делать
    }

    static drop(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.target.food += ant.load.weight;
        ant.load = false;
        ant.goal = constructor;
        ant.speed = 1.0;
        ant.score += 50;
    }

    static flex(ant){
        ant.timer = 40;
        ant.walk = false;
        ant.goStep();
    }

    static info(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.score += 75;
    }
}