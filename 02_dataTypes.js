"use strict"; //treat all js code to newer version 

let name = "Sachin";
let age = 23;
let isLoggedIn = true;
let city; //undefined
let id=Symbol(112);
let anotherId=Symbol(112); // if i pass same value to symbol it gives different values

//null: stand alone value retun type object
//undefined: declared variale with no value;
//number: range is 2 power of 53
//boolean: return true or false 
//bigInt: with biginit we can store large number value 
//string: store the sequence of char in single or double qoute
//symbol:symbols is to create unique property keys


// ******************** Operation *********************

//interview questions
console.log(1 + 1);
console.log("1" + 2);
console.log(1 + "2");
console.log("1" + "3");
console.log(1 + 2 + "3")  //it ll add first 1+2 than concat 3
console.log("1" + 2 + 2);  //it ll not add numbers after string 


let incCounter = 12;
//incCounter++; //postfix increment: returns the value before incrementing.
++incCounter; //prefix increment: returns the value after incrementing.
console.log(incCounter)