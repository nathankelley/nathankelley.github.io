// ACCESS FORM
// using name attribute to get form
const form = document.forms['search']; // this is the better way
/*
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
*/

// FOR SUPERHERO FORM
const form_2 = document.forms['user'];
form_2.addEventListener('submit', makeHero, false);

// create hero object
function makeHero(event) {
    // debugger;
    event.preventDefault();
    const user = {};
    user.userName = form_2.userName.value;

    // get base of operations
    let errorPepsi = "Pepsi";
    if (form_2.category.value == "Pepsi") {
        alert("Invalid entry. Please try again.");
    } else {
        user.category = form_2.category.value;
    }
    

    // get origin story
    user.choice = form_2.choice.value;

    // this method in JSON will convert hero object to string to display
    alert(`You submitted: \n${JSON.stringify(user)}`);
    return user;
}

/*
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
*/