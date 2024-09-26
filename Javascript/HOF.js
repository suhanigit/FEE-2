// ek function jb doosre function ko as argument leta ha vo hota ha Higher Order Function
//Higher order Function

//print name 20 times
// function printName(func,num){
//     for(let i =1; i <= num ; i++)
//     {
//         // console.log(num);
//         func();
//     }
// }

// let myName = function(){
//     console.log("Yash");
// }

// printName(myName,20); //myname is function parameter



// even or odd
let arr =[1,2,3,4,5];

function Checknumber(func,arr)
{   
    for(let i = 0 ; i < arr.size() ; i++)
    {
        func(arr[i]);
    }
}

let even = function(num){
    if(num%2==0)
    {
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}

Checknumber(even,arr);