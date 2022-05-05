// user object info and methods
let user = {
    first_name: "Nathan",
    last_name: "Kelley",
    age: 26,

    addInfo(first, last, age) { // if I made a php file, this would work
        this.first_name = first;
        this.last_name = last;
        this.age = age;

        this.sayHi();
    },

    sayHi() {
        document.getElementById("hello").innerHTML = alert("Hi! My name is " + this.first_name + " " + this.last_name + ". I'm " + this.age + " years old.");
    }
};