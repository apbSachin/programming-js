//function is reusable block of code where we are writing set of code 
//allowing you to encapsulate logic

//function can be declared using function keyword and function name using parenthisis() and block

//**function syntax */
function functionName() {
    //code logic
}
//want to excute code invoke function name 
functionName()  //functionName: reference and ():excution


//example to add two number
function addTwoNumber(number1, number2) { //number1, number2 is parameters
    //here i am just consoling the value not returning any value
    console.log(number1 + number2);
}
addTwoNumber(3, 4) //i have passes the parameter in function while invoking it ask arguments 


//suppose if i want to store function invocation in variable lets check what output ll get
function addTwoNumbe(num1, num2) {
    console.log(num1 + num2)
}
const result = addTwoNumbe(2, 6); //i ll get output 8 but if i log result 
console.log(result); //if i log result then i get o/p undefined beacuse i am not returning value from function
//lets write above code using return keyword


function add(n1, n2) {
    return n1 + n2;
}
const resu = add(5, 9);
console.log(resu); //now i didnt get any undefined