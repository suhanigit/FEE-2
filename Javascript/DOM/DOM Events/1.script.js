// ****4***
// EVENT LISTENER--> multiple events ko store krra ke rkhta ha
// 2 cheeze let ha - 1) event
                //   2) call back function
// var btns = document.querySelectorAll("button");
// console.dir(btns);

// for(btn of btns){

//     btn.addEventListener("click",myfunc);  //addEventlistener --> OBJECT
//     btn.addEventListener("click",hello);
// }


// function hello(){
//     console.log("Hello");
// }
// function myfunc(){
//     console.log("Button was pressed");
// };




// ****3****
// var btns = document.querySelectorAll("button");
// console.dir(btns);

// // onclick wala event ek hi value ke liye work krta ha
// for(btn of btns){
//     // btn.onclick = myfunc();
//     // btn.onclick = Hello();
// }

// function myfunc(){
//     console.log("Button was pressed");
// };






// ****2****
// var btns = document.querySelectorAll("button");
// console.dir(btns);

// // saaro pr lg jaaega onclick wala event
// for(btn of btns){
//     btn.onclick = myfunc();
//     btn.onmouseenter = function cursor(){
//         alert("Your cursor was over me");
//     }
// }

// function myfunc(){
//     console.log("Button was pressed");
// };





// ****1****
// button pr agr event lgana ho

// var btn = document.querySelector("button");
// console.dir(btn);

// btn.onclick = function (){
//     console.log("Button was pressed");
// };



var para = document.querySelector("p");
// para.addEventListener("mouseenter",func);

// function func(){
//     console.log("Paragraph");
// }

para.onmouseenter = function(){
    console.log("Paragraph");
}