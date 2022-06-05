// Squares whatever is sent in
function square(x) {
    console.log(x*x);
    return x*x;
}
// window.onload = square.length;

// Objects
const bleu = { name: 'Bleu' };
const red = { name: 'Red' };

// Method to return object name
function sayHello(){
    return `Hello, my name is ${ this.name }!`;
}

// Blue will say his name here
let bleuName = document.getElementById("bleu-display").innerHTML = sayHello.call(bleu);
window.onload = bleuName;

let redName = document.getElementById("red-display").innerHTML = sayHello.call(red);
window.onload = redName;