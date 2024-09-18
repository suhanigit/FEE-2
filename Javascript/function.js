//functions--> unessecary code jo bar bar likha jaa rha ha 
//usse ek hi cheez mai define kr lete ha

//argument--> assigned values to the parameter

//FORMAT
// function function_name(parameters){
//     //exectuable code(function defination)
// }
// function_name(arguments)




// function sum(a,b){  //a nd b are function parameters
//     var c = a + b ;
//     console.log(c);
// }

//function call
//5 and 3 are function arguments assigned to a and b of function paarmeter
// sum(5,3); 




//default argument
function multiply(a,b=4){  //a nd b are function parameters
    var c = a * b ;
    console.log(c);
}
// multiply(5);  //NaN -->not a number
multiply(2);