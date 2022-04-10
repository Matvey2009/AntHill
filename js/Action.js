//Симулятор муравейника//

class Action {

    static wait(ant) {
        console.log('Муравей ждёт');
    }

    static find(ant) {
        console.log('Муравей ищет');
        let angle = ant.ang-Math.PI/2;
        ant.pos.x += ant.speed * Math.cos(angle);
        ant.pos.y += ant.speed * Math.sin(angle);
        ant.pose = !ant.pose;
    }

    static back(ant) {
        console.log('Муравей возвращается');
    }

    static mоve(ant) {
        console.log('Муравей движется');
        ant.pose = !ant.pose;
    }

    static grab(ant) {
        console.log('Муравей подбирает');
    }

    static bite(ant) {
        console.log('Муравей кусает');
    }

    static kick(ant) {
        console.log('Муравей пинает');
    }

    static dead(ant) {
        console.log('Муравей погиб');
    }

    static quit(ant) {
        console.log('Муравей ждёт');
    }
}