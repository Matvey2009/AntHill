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
    countIn = 11;
    count1 = 13;
    count2 = 13;
    countOut = 9;

    constructor(ant) {
        //Входящие данные
        this.inputNodes = this.fillNodes(this.countIn);
        //Промежуточные ноды
        this.hiddenNodesOne = this.fillNodes(this.count1);
        this.hiddenNodesTwo = this.fillNodes(this.count2); 
        //Выходящие ноды
        this.outputNodes = this.fillNodes(this.countOut)
    }

    //Создаёт веса
    init (ant) {
        ant.nn.w_1 = this.rndSynapse(this.countIn, this.count1);
        ant.nn.w_2 = this.rndSynapse(this.count1, this.count2);
        ant.nn.w_3 = this.rndSynapse(this.count2, this.countOut);

    }

    //Выбор дейсвия
    select(ant) {
        if (ant.life <= 0)
            ant.action = Action.dead;
        else {
            this.inputNode = this.normInput(ant);
            this.hiddenNodesOne = this.synapse(this.inputNode, ant.nn.w_1, this.hiddenNodesOne);
            this.hiddenNodesOne = this.norm(this.hiddenNodesOne);

            this.hiddenNodesTwo = this.synapse(this.hiddenNodesOne, ant.nn.w_2, this.hiddenNodesTwo);
            this.hiddenNodesTwo = this.norm(this.hiddenNodesTwo);

            //this.outputNodes = this.synapse(this.hiddenNodesTwo, ant.nn.w_3, this.outputNodes);
            //this.outputNodes = this.norm(this.outputNodes);
            this.outputNodes[1] = 5; ///////////////////////////////////////

            let maxi = Math.max(...this.outputNodes);
            maxi = this.outputNodes.indexOf(maxi);
            ant.action = Action.listAction[maxi];
        }
    }

    //Заполнение нодами
    fillNodes(count) {
        let node = [];
        for (let i = 0; i < count; i++)
            node[i] = 0.0;
        return node;
    }

    //Нормировка входящих данных
    normInput(ant) {
        let node = [ 
            ant.life /= 100, 
            !!ant.target,
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
        return node;
    }

    // Нормализация данныъ
    norm(node) {
        
        return node;
    }

    //Расчёт данных нейрона
    synapse(start, weight, finish) {
    }

    //Рандомные веса
    rndSynapse(start, finish) {
        let node = [];
        for(let i = 0; i < start; i++) {
            node[i] = [];
            for(let j = 0; j < finish; j++)
                node[i][j] = Math.random();
        }
        return node
    }
}
