//Симулятор муравейника//

class Action {

    static wait(ant) {
        console.log('Муравей ждёт');
    }

    static find(ant) {
        console.log('Муравей ищет');
        let ang = ant.ang - Math.PI / 2;
        ant.pos.x = Math.round(ant.pos.x + ant.speed * Math.cos(ang));
        ant.pos.y = Math.round(ant.pos.y + ant.speed * Math.sin(ang));
    }

    static back(ant) {
        console.log('Муравей возвращается');
    }

    static mоve(ant) {
        console.log('Муравей движется');
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