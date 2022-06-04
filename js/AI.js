//Симулятор муравейника//

class PI { 
    select(ant) {
        //Cмерть
        if (ant.life <= 0)
            ant.action = Action.dead;
        //Выбрость
        else if (ant.load && ant.target instanceof Colony && model.delta(ant.pos, ant.target) < ant.speed*12)
            ant.action = Action.drop;
        //Атака
        else if (!ant.load && ant.target instanceof Ant)
            ant.action = Action.kick;
        //Взять
        else if (model.delta(ant.pos, ant.target) < ant.speed*12 && ant.target instanceof Food && !ant.load)
            ant.action = Action.grab;
        //Вернуться
        else if (ant.load instanceof Food)
            ant.action = Action.back;
        //Найти
        else if (!ant.load)
            ant.action = Action.find;
        //Двигаться
        else if (ant.target && model.delta(ant.pos, ant.target) <= ant.speed * 10)
            ant.action = Action.mоve;
        //Обмен информацией
        else if (false)
            ant.action = Action.info;
        //Танцевать
        else if (ant.life == 300)
            ant.action = Action.flex;
        //Подождать
        else
            ant.action = Action.wait;
    }
}

class RI {
    select(ant) {
        if (ant.life <= 0)
            ant.action = Action.dead;
        else
            ant.action = Action.listAction[(Math.floor(Math.random() * Action.listAction.length))];
    }
}

class AI {
    constructor(ant) {
        //Входящие данные
        this.inputNodes = [ 
            ant.life /= 100, 
            ant.target ?? false,
            ant.load instanceof Food,
            ant.load instanceof Rock,
            ant.listTarget.colony,
            ant.listTarget.ally,
            ant.listTarget.allyen,
            ant.listTarget.food,
            ant.listTarget.rock,
            ant.listTarget.labFoodse,
            ant.listTarget.labAnt
        ];

        hiddenNodesOne = new Array(13);

        hiddenNodesTwo = new Array(13); 

        //Выходящие данные
        this.outputNodes = [
            Action.wait,
            Action.find,
            Action.back,
            Action.mоve,
            Action.grab,
            Action.kick,
            Action.drop,
            Action.flex,
            Action.info
        ]
    }

    select(ant) {
        if (ant.life <= 0)
            ant.action = Action.dead;
        else
            ant.action = Action.listAction[(Math.floor(Math.random() * Action.listAction.length))];
    }
}
