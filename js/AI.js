//Симулятор муравейника//

class PI { 
    select(ant) {
        //Cмерть
        if (ant.life <= 0)
            ant.action = Action.dead;
        //Выбрость
        else if (ant.load && ant.target == Colony.pos)
            ant.action = Action.drop;
        //Бить
        else if (!ant.load && ant.target == ant)
            ant.action = Action.kick;
        //Двигаться
        else if (ant.target instanceof ant.goal)
            ant.action = Action.mоve;
        //Найти
        else if (!ant.load)
            ant.action = Action.find;
        //Взять
        else if (Model.delta(ant.pos, ant.target) < ant.speed*12 && ant.target instanceof Food && !ant.load)
            ant.action = Action.grab;
        //Вернуться
        else if (ant.load instanceof Food)
            ant.action = Action.back;
        //Обмен информацией
        else if (false)
            ant.action = Action.info;
        //Танцевать
        else if (ant.life == 1)
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