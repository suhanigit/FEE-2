/*Promises--> Promises represemt the future events , technically thry are objects.
By default promises stay in pending state. Promise has 3 states--> pending, fulfilled and rejected*/

// 1.2 Promises accept 2 callbacks - resolve and reject
// let like = false;
// let p = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         if(like){
//             resolve("yeah,she likes you");
//         }
//         else{
//             reject("nah, You're shit");
//         }
//     }, 2000);
// });

// console.log(p);

// // 2.1 Consuming promises: then(promises ko consume krne ke liye ye use krte ha)

// p.then(
//     (value) =>{
//     console.log(`Message: ${value}`);
// }, (err) =>{
//     console.log(`Message: ${err}`);
// }
// )

// // 2.2 Consuming promises: then.catch
// p.then(
//     (value) =>{
//     console.log(`Message: ${value}`);
// })
// .catch((err) =>{
//     console.log(`Message: ${err}`);
// });



// 2. Promise Chaining: ek ke andr ek promise

// let a = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise 1 resolved");
//     },2000);
// });

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Promise 2 resolved");
//         },2000);
//     });
//     return p2;
// }).then((value)=>{
//     console.log("done");
//     return 2;
// }).then((value)=>{
//     console.log("OK now done!!");
// })



// 3. Promise inside a function

// function MaggieLekarAao(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let DukkankHuliHai = true;
//             if(DukkankHuliHai){
//                 resolve("Maggi mil gayi");
//             } else{
//                 reject("Maggi ni Mili");
//             }
//         }, 2000);
//     });
// }
// MaggieLekarAao()
//     .then((value)=>{
//         console.log(value);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


// create a function movieDownloadFile which take a argument url. 