
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

function search() {
    alert(' Form Submitted');
    event.preventDefault(); // stops form from being submitted altogether
}