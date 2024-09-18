//ITERATOR--> arr,string,map,set etc.

// let arr=[1,2,3,4,5];
// console.log(arr[Symbol.iterator]);
// console.log(arr.iterator.next());

// //for-of --> value return krta ha
// for(i of arr){
//     console.log(i);
//     console.log(arr[i]);
// }

//object ke andr iterator protocol present nahi hota ha
//for-in--> object pe kaam krta ha aur key return krta ha
// let obj = {
//     name: "Shubham"
// };

// for(i in obj){
//     console.log(obj[Symbol.iterator]);
//     console.log(i);
//     console.log(obj.name);
// }