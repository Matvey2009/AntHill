//Симулятор муравейника//

var model, view, control;
let listClass = [
    'AI',
    'Action',
    'Ant',
    'Colony',
    'Items',
    'Model', 
    'View', 
    'Control'
]; 

for(let name of listClass) {
    let script = document.createElement('script');
    script.src = 'js/' + name + '.js';
    script.type = 'application/javascript';
    document.body.appendChild(script);
}

let listLib = [
    'FileSaver.js'
]; 

for(let name of listLib) {
    let script = document.createElement('script');
    script.src = 'libs/' + name;
    script.type = 'application/javascript';
    document.body.appendChild(script);
}

window.onload = () => {
    model = new Model();
    view = new View();
    control  = new Control();
}