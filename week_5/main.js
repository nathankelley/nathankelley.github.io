// ACCESS FORM
// using name attribute to get form
const form = document.forms['search']; // this is the better way

// ACCESS FORM ELEMENTS
// using elements method to access form 
// const [input,button] = form.elements;

// use name attribute for specific elements
const input = form.elements.searchInput;

// input.addEventListener('focus', () => alert('focused'), false); 
input.addEventListener('blur', () => alert('blurred'), false);
input.addEventListener('change', () => alert('changed'), false);

// submit button - current action
form.addEventListener ('submit', search, false);

function search(event) {
    alert(`You submitted: ${input.value}`);
    event.preventDefault(); // stops form from being submitted altogether
}

// input field auto-value
input.value = 'Submit Here';

// this will take the text away when user clicks in box
input.addEventListener('focus', function(){
    if(input.value==='Submit Here'){
        input.value = '';
    } 
}, false);
// this will add the text if the user leaves the box without text
input.addEventListener('blur', function(){
    if(input.value===''){
        input.value = 'Submit Here';
    } 
}, false);



// FOR SUPERHERO FORM
const form_2 = document.forms['hero'];
form_2.addEventListener('submit', makeHero, false);

// create hero object
function makeHero(event) {
    // debugger;
    event.preventDefault();
    const hero = {};
    hero.name = form_2.name.value;

    // get hero powers
    hero.powers = [];
    for (let i = 0; i < form_2.powers.length; i++) {
        if (form_2.powers[i].checked){
            hero.powers.push(form_2.powers[i].value);
            }
    }

    // get hero type
    hero.category = form_2.category.value;

    // get base of operations
    hero.city = form_2.city.value;

    // get origin story
    hero.origin = form_2.origin.value;

    // this method in JSON will convert hero object to string to display
    alert(JSON.stringify(hero)); 
    return hero;
}


// error handler
// this uses the builtin Error function and a catch block
function imaginarySquareRoot(number) {
    'use strict';
    let answer;
    try {
        answer = String(squareRoot(number));
    } catch(error) {
        answer = squareRoot(-number)+"i";
    } finally {
        return `+ or - ${answer}`;
    }
}
