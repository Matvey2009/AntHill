//Симулятор муравейника//

class PI { 
    select(ant) {
        //Cмерть
        if (ant.live <= 0)
            ant.action = Action.dead;
        //Выбрость
        else if (ant.load && ant.target == Colony.pos)
            ant.action = Action.drop;
        //Бить
        else if (true)
            ant.action = Action.kick;
        //Двигаться
        else if (true)
            ant.action = Action.mоve;
        //Найти
        else if (true)
            ant.action = Action.find;
        //Взять
        else if (true)
            ant.action = Action.grab;
        //Вернуться
        else if (true)
            ant.action = Action.back;
        //Обмен информацией
        else if (true)
            ant.action = Action.info;
        //Танцевать
        else if (live == 1)
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