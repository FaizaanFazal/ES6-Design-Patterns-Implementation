// "Immediately-invoked function expression" as a term describes a design pattern which has also been referred to as a "self-executing anonymous function.

const temp = ((x)=> {return x+" world";})("hello")

// use it as a variable:
console.log(temp); // output: hello world

// a self-invoking function without params:
const temp1 = (()=> {return "world";})()
console.log(temp1);