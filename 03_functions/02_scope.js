//there are two types of scopes in js
//local scope: where varibales are declared inside the block scope
//global scope: where varibales are declared outside the block scope

var a = 12;
let b = 34;
const c = 53;

//what is mean of block scope:
//the variable which is declared inside the block scope that should not be accessed outsie the block
//but with var it ll access so avoid using var
if (true) {
  var a = 10; //here i am not returning any value than also var is printing
  let b = 30;
  const c = 50;
  //console.log(b);
  //console.log(c);
}

console.log(a);
console.log(b);
console.log(c);
