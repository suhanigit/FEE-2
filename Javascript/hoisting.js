// call stack--> memory allocation,varaibale declaration,initialization
// Global execute content
// --> memory creation phase -->jaise hi ek variable define krte ha uski value undefined initalize ho jaati ha
// --> code execution phase


//let and const: temporary dead zone : reference error
myfunc();   // function call
console.log(a);
var a = 10;

function myfunc(){
    var b = 20;
    console.log(b);
}