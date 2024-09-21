//scope --> 1. global scope
//          2. functional scope
//          3. block scope(Es6)
//          4. lexical scope-->outer func ka koi variable inner function mai access krna ha to kr skte ha

// 1.) GLOBAL SCOPE--> By default all values are globally accessible throughout the code base

// let a =5;
// var b = 10;
// const c = 15;

// function myfunc(){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// myfunc();

// console.log(a);
// console.log(b);
// console.log(c);


// //2.) FUNCTIONAL SCOPE--> dunction ke andr hi use kr skte ha
// let c = 25; //global scope
// function myfunc(a,b){
//     let c = a + b; //functional scope
//     console.log(c);
// }
// myfunc(2,5);
// console.log(c);



// // 3.) BLOCK SCOPE--> sirf var ko block ke bahr access kr skte ha
// --> let aur const ko nhi kr skte

// {
//     let a =5;
//     var b = 10;
//     const c = 15;
// }
// console.log(b);



// //4.) Lexical Scope 

function outerfunc(){
    var a =20;
    // var d = b - c;
    // console.log(d); 
    //outer function cannot access inner function defined variables values
    
    function innerfunc(){
        var b = 30;
        var c = a + b;
        // console.log(c);
        //outer function can access inner function defined variables values
    }
    innerfunc();
}
outerfunc();
