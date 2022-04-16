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
        Action.dance,
        Action.info
    ];

    static wait(ant) {
        ant.timer = 40;
        ant.walk = false;
    }

    static find(ant) {
        ant.timer = 40;
        ant.walk = true;
        ant.target = ant.getTarget(ant.pos);
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    static back(ant) {
        ant.timer = 40;
        ant.walk = true;
        ant.food = 1;
        // Повернуться на муравейник
        // Идти к муравейнику
    }

    static mоve(ant) {
        ant.timer = 40;
        ant.walk = true;
        // Повернуться на цель
        // Идти к цели
    }

    static grab(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.food = 1;
        // Взять еду или камень
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
        ant.food = 0
        // Отпустить камень или еду
    }

    static dance(ant){
        ant.timer = 40;
        ant.walk = false;
        // Начать танцевать
    }

    static info(ant) {
        ant.timer = 40;
        ant.walk = false;
    }
}