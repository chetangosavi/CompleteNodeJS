const action = require("./moduleInNode.js");

console.log("Hello World");

function add(a,b){
    return a+b;
}

let sum = add(5,10);
console.log(sum);
let value = action();
console.log(value)