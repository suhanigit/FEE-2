

var newh1 = document.
querySelector('h1');
console.log(newh1.classList);   //It tells how many classes are there for a given element

// How to give property or class to the element 
newh1.classList.add('green');

//dir properties return krta ha
// checks class according to the array
console.dir(newh1.classList[1]);

// How to remove a class
newh1.classList.remove("green");

// To check if there is any class present in the element
var b = newh1.classList.contains("green");
console.dir(b);

//Toggle--> If there is class present of that name it removes 
// if not present it adds

newh1.classList.toggle("Black"); //Adds class balck as it is not present
newh1.classList.toggle("iron"); //Removes class Iron as it is present


