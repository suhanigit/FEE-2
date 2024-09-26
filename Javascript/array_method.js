//array methods: map.reduce,filter,sort

// 1.) MAP--> returns a new array
let num = [1,2,3,4];
function Cube(num){
    return num ** 3;
}

let newarray = num.map(Cube());
console.log(newarray)
