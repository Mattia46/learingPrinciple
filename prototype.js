//PROTOTYPE
// Prototype allows to modify parent function, applying it to every object that inherit it
// First looks if the object has a function or value, if it doens't find it goes up to the parent (inherit delegation)
function first() { console.log(`ciao ${this.sound}`) }

//This won't work because the new Arrow function has a different this;
const second = () => this.value++;

function second2() { return this.value++ }

function third() { console.log(`count is ${this.count}`); }

const assign = {
    first,
    second,
    second2,
    third,
}
const mattia = {
    sound: 'Mattia',
    count: 1
}
const mau = {
    count: 10
}
Object.setPrototypeOf(mattia, assign);
Object.setPrototypeOf(mau, assign);
assign.sound = 'ECCOLO';
mattia.first();
mattia.third = function() { console.log('new Third'); }
mattia.third();
mau.first();

//CLASS
// You can modify the class method, but only within the object instanciated. Doesn't apply to the other object
// instantiated
class Mattia {
    call() { console.log('ciao CALL') }
    phone() { console.log(`this is ${this.test}`) }
}
const newMattia = new Mattia()
const newMau = new Mattia()
newMattia.call();
newMattia.call = function() { console.log('BOH SOLO PROVA') }
newMattia.test = 'io';
newMattia.call();
newMau.call();

//Differences:
//PROTOTYPE: if change a parent function applies to every child
//  CLASS: you can change only the method within the instance
//
//PROTOTYPE: Inherit delegation: First look in the object, if it doesn't find it goes up to the parent
