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

    //Ждать
    static wait(ant) {
        ant.timer = 40;
        ant.walk = false;
    }

    //Искать
    static find(ant) {
        if (ant.listTarget.food)
            ant.target = ant.listTarget.food;
        else if (ant.listTarget.allyen)
            ant.target = ant.listTarget.allyen;
        else 
            ant.target = ant.listTarget.random;
        ant.walk = true;
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed);
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    //Поиск колнии
    static back(ant) {
        if (ant.listTarget.colony)
            ant.target = ant.listTarget.colony;
        else 
            ant.target = ant.listTarget.random;
        ant.walk = true;
        ant.goal = Colony;
        ant.target = {pos: model.rndPos(ant.pos, ant.range)};
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed);
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    //Передвижение
    static mоve(ant) {
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed - 10);
        ant.walk = true;
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    //Взять Корм или Камень
    static grab(ant) {
        ant.timer = 40;
        ant.walk = false;
        let food = Math.min(ant.target.weight, ant.life/2);
        ant.target.weight -= food;
        ant.load = new Food(ant.pos, food);
        ant.speed = 0.7;
        ant.score += 50;
        if (ant.target.weight <= 0)
           model.delFood();
    }

    //Ударить(укусить) вражеского муравья
    static kick(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.score += 25;
    }

    //Смерть
    static dead(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.color = 'rgba(0, 0, 0, 0.50)';
        if(ant.load.weight)
            ant.Action = Action.drop;
        ant.target = false;
    }

    //Выбросить предмет который взял муравей
    static drop(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.target.food += ant.load.weight;
        ant.load = false;
        ant.goal = constructor;
        ant.speed = 1.0;
        ant.score += 50;
    }

    //Танец муравья
    static flex(ant){
        ant.timer = 40;
        ant.walk = false;
        ant.goStep();
    }

    //Передача информации
    static info(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.score += 75;
    }
}