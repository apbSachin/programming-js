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
    //console.log(number1 + number2);
}
addTwoNumber(3, 4) //i have passes the parameter in function while invoking it ask arguments 


//suppose if i want to store function invocation in variable lets check what output ll get
function addTwoNumbe(num1, num2) {
    // console.log(num1 + num2)
}
const result = addTwoNumbe(2, 6); //i ll get output 8 but if i log result 
//console.log(result); //if i log result then i get o/p undefined beacuse i am not returning value from function
//lets write above code using return keyword


function add(n1, n2) {
    return n1 + n2;
}
const resu = add(5, 9);
//console.log(resu); //now i didnt get any undefined

//if i am not passing any value while invoking than it ll log undefined 
//for undefined we can write condition

// function callMyName(name){
//     return `Your name is : ${name}`
// }
// console.log(callMyName("sachin")) //Your name is : sachin


//**if i give empty string ll get empty  */
//console.log(callMyName("")) //Your name is : 

//**if we dont pass empty then ll get undefined at this case we need to write conditons */
//console.log(callMyName()) //Your name is : undefined

function callMyName(name) {
    // if(name === undefined){
    //     console.log(`please enter name`);
    //     return;
    // }

    //we can write another logic also using ! it ll convert true to false and false to true

    if (!name) {
        console.log(`please enter name`);
        return;
    }
    return `Your name is : ${name}`
}
console.log(callMyName());


//if we want to pass default value than use like below
function callName(name = "Sachin") { //here no need to apply any condition as we are passing default value
    // if(name === undefined){
    //     console.log(`please enter name`);
    //     return;
    // }

    if (!name) {
        console.log(`please enter name`);
        return;
    }
    return `Your name is : ${name}`
}
console.log(callName());


//suppose if user is passing multiple arguments for one parameter than how to handle
// this can be done by using rest operator
//rest operator: print all the arguments into one array
function calculateAdd(...num){ //rest operator ...num
    return num;
}
console.log(calculateAdd(2)); //i ll get output as 2
//if i give more arguments in function invocation than i need to use as rest opertor i order to print those value
console.log(calculatAdd(2,4,23,65));//o/p:[2,4,23,65]; beacuse of using rest operator
