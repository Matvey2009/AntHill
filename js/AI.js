//Симулятор муравейника//

class PI {
    select(ant) {
        if (ant.pose) {
            ant.action = () => Action.wait(ant);
            ant.timer = 20;
        } else {
            ant.action = () => Action.find(ant);
            ant.timer = 30;
            ant.target = {      
                x: Math.round(Math.random() * (window.innerWidth-500)+250),
                y: Math.round(Math.random() * (window.innerHeight-300)+150)
            }
            ant.ang = ant.getAngle(ant.pos, ant.target);
        }
        ant.pose = !ant.pose;
    }
}

class AI {
    select(ant) {
        ;
    }
}