// creating elements using javascript
var h1 = document.createElement("h1");

h1.innerText = "DOM : Elements";

var body = document.querySelector("body");

body.appendChild(h1);

//By default append adds element at the last
h1.append(" Learning in JS");

var button = document.createElement("button");

button.innerText = "Submit";

body.appendChild(button);

// For element to appear at the start
body.prepend(h1);

// body.remove();