 // anonymous function
 const goodbye = function() {
    console.log('Goodbye World');
}

// parameters
function square(x) {
    document.getElementById("square").innerHTML = x*x;
}

function mean(a, b, c) {
    document.getElementById("mean").innerHTML = (a+b+c)/3;
}

function array(a, b) {
    const sentence = [a, b, "is", "the", "coolest"];

    
    document.getElementById("fname").innerHTML = sentence[a];
    document.getElementById("lname").innerHTML = sentence[b];
    for (let i = 0; i < 6; i++) {
        document.getElementById("print-array").innerHTML = sentence[i];
    }
}
