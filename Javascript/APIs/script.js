/*APIs--> Application Programming Interface
Json(Javascript Object Notation):- ki form mai object ka data store/access hota ha
Json ke data ko access krne ke 2 methods hai:-
            --> parse => json.parse() - to passs string data to json object
            --> json.stringify() - json ke data to strong mai convert krne ke liye
                                 - to parse on js object data into jso

Ajax:- Mechanism jiske through hm API ke data ko access krte ha (IN ASYNCHRONOUS WAY) without relaoding or refreshing our page
*/

let url = "https://catfact.ninja/fact";

// //2.2-> CHaining
// fetch(url)
//     .then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//     })
//     .catch((err)=>{
//         console.log(`Wrong API data + ${err}`);
//  })




// 2.1
// fetch(url)
//     .then((res)=>{
//         // console.log(res);
//         //console.log(res.json());
//         res.json().then((data)=>{   //***.json() conversion ke liye use hota ha json into readable format
//             console.log(data);
//         })
// }).catch((err)=>{
//     console.log(`Wrong API data + ${err}`);
// })

//1.) fetch by default promise return krta ha
// console.log(fetch(url));  