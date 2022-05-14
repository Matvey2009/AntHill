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
        //Двигаться
        else if (ant.target instanceof ant.goal)
            ant.action = Action.mоve;
        //Вернуться
        else if (ant.load instanceof Food)
            ant.action = Action.back;
        //Найти
        else if (!ant.load)
            ant.action = Action.find;
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

class AI {
    select(ant) {
        ant.action = Action.listAction[(Math.floor(Math.random() * Action.listAction.length))];
    }
}