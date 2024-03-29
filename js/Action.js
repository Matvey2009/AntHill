//Симулятор муравейника//

class Action {

    static listAction = [
        Action.wait, 
        Action.find,
        Action.back,
        Action.mоve,
        Action.grab,
        Action.kick,
        Action.drop,
        Action.flex,
        Action.info
        //Action.dead,
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
        else if (ant.listTarget.labFood && Math.round(Math.random()*1.5))
            ant.target = ant.listTarget.labFood;
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
        //else if (ant.listTarget.labAnt)          Не раскоментировать!
        //    ant.target = ant.listTarget.labAnt;  Не раскоментировать!
        else 
            ant.target = ant.listTarget.random;
        ant.walk = true;
        ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed);
        ant.angle = ant.getAngle(ant.pos, ant.target);
    }

    //Передвижение
    static mоve(ant) {
        if (ant.target) {
            ant.timer = Math.round(model.delta(ant.pos, ant.target) / ant.speed - 10);
            ant.walk = true;
            ant.angle = ant.getAngle(ant.pos, ant.target);
        }   
    }

    //Взять Корм или Камень
    static grab(ant) {
        if (ant.target instanceof Food){
            let food = Math.min(ant.target.weight, ant.life/2);
            ant.target.weight -= food;
            ant.load = new Food(ant.pos, food);
            ant.speed = 0.7;
            ant.score += 50;
        }
        ant.timer = 40;
        ant.walk = false;
        ant.live = 100
        if (ant.target.weight <= 0)
           model.delFood();
        
    }

    //Ударить(укусить) вражеского муравья
    static kick(ant) {
        if (ant.target instanceof Ant && ant.target.color != ant.color) {
            ant.target.target = ant;
            ant.target.live -= 10;
            ant.angle = ant.getAngle;
            ant.score += 75;
            ant.listTarget.allyen = ant.target;
            if (ant.target.live <= 0) {
                ant.frag += 1;
                ant.colony.frag += 1;
                ant.score += 250;
            }
        }
        ant.walk = false;
        ant.target = false;
        ant.timer = 10;
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
        if (ant.load) {
            ant.target.food += ant.load.weight;
            ant.load = false;
            ant.speed = 1.0;
            ant.score += 50;
        }
        ant.timer = 40;
        ant.walk = false;
        ant.live = 100
    }

    //Танец муравья
    static flex(ant){
        ant.timer = 40;
        ant.walk = false;
    }

    //Передача информации
    static info(ant) {
        ant.timer = 40;
        ant.walk = false;
        ant.score += 75;
    }
}