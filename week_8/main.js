// CANVAS
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "images/bike.png";
    img.onload = function() {
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);             
        };
}

var mice = document.querySelectorAll("#mouseContainer img");
var mouse = null;
for (var i=0; i < mice.length; i++) {
    mouse = mice[i];
    mouse.addEventListener('dragstart', function (event) {
    // handle the dragstart event
    });
}
mouse.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text/plain", this.id); 
});
var cat = document.getElementById("cat");
cat.addEventListener("dragover", function(event) {
    event.preventDefault();
});
cat.addEventListener("drop", function(event)) {
    var mouseHash = {
        mouse1: 'NOMNOMNOM',
        mouse2: 'Meow',
        mouse3: 'Purrrrrr ...'
    };
}
var catHeading = document.getElementById('catHeading');
var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
catHeading.innerHTML = mouseHash[mouseID];
var mousey = document.getElementById(item);
mousey.parentNode.removeChild(mousey);
event.preventDefault();