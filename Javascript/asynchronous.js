// Call Back function
// function myfunc(){
//     console.log("My function it is..");
// }

// function hello(call){
//     console.log("This is a hello function");
//     call();
// }

// hello(myfunc);





// Noramlly JS is a synchronous language

// console.log("Started Execution");

// function myfunc(){
//     console.log("This is a function");
// }

// myfunc();

// console.log("Execution Ends Here..");




// Example of Call Back Functions (call back Hell)
// function myProduct() {
//   //product
// }
// myProduct(payment);

// function payment() {
//     let product = ['' ,'', ''];
// }

// payment(message);

// function message() {
//   //some message
// }

//call back function example
// function myFunc() {
//   console.log("My func called");
// }

// function hello(call) {
//   console.log("hello func called");
//   call();
// }

// hello(myFunc);



//synchronous

// console.log("Execution started..");

// for(let i = 0; i< 1000; i++){
//     console.log("For Loop running");
// }

// console.log("Execution ends..");


//set interval--> This function executed after a specific delay
// 2 cheeze leta ha --> call back function
//                  --> timeout or delay

// function setTimeout()
// {

// } 


// var set = function setTimeout()
// {

// }

// console.log("execution started");
// // global execution phase mai ye function define ho jaaega
// setTimeout(() => {
//     console.log("SetTimeout function")
// }, 2000);


// for(let i = 0; i< 1000; i++){
//     console.log("Loop running");
// }


// console.log("execution ends");

// function first(){
//     console.log("This is a first function");
// }

// first();






//Js also has asyncronous capabilities.

//Js is an asyncronous language but it's execution is done in syncronous way.

// setTimeout(() => {
//   console.log("Hello");
// }, 2000);

// var myFunc = () => {
//   console.log("Function");
// };

// myFunc();






/* web APIs mai 2 asynchronous functions hote ha--> settimeout
                                                --> setinterval
ye dono functions JAVASCRIPT ko asynchronous tareeke se execute krti ha
GLOBAL EXECUTION ENVIRONMENT MAI 2 STACK HOTE HA--> Main stack
                                                --> Call stack
** MAIN STACK mai sara javascript ka code jata ha jo browser pr execute hota ha
** CALL STACK mai agr koi settimeout ya setinterval wala function call hota ha toh vo iss stack mai aa jata ha

event loop javscript ki execution ki switching krta ha (LIKE KERNEL) between main stack and call stack

jb tk raw javascript ka code jo main stack mai ha vo execute ni hota tb tk call stack wala code ni execute ho skta
*/


/*Js executes in syncronous way, but settimeout and settimeinterval are terms of asyncronous programming stored in web
api(browser), if these functions are called web api throws the function in js stack, after completing the execution 
in js leaving settimeout and settimeinterval undone, a unique id is given to the settimeout result and there exists 
a mediator named event loop which checks if raw code in js is executed or not , and if it is executed , event loop 
jumps to call stack and take the output from settimeout func and executes that.*/

//the time out set in settimeout doesn't matter if the whole js code is not executed, web api data will only pass if js code is executed completely.




// console.log("start");
// var a = setTimeout(() => {
//     console.log("SetTimeOut working");  
// }, 1000);

// clearTimeout(a);  //stops working of set time out function
// console.log("Ends");


// console.log("start");
// var a = setInterval(() => {
//     console.log("Set Interval working");  
// });

// clearInterval(a);  //stops working of set interval function
// console.log("Ends");




// let count = 0;
// let interval = setInterval(() => {
//     console.log("execution starts");
//     count++;

//     if(count == 3)
//     {
//         clearinterval(interval);
//         console.log("execution ends here");
//     }
    
// }, 1000);
