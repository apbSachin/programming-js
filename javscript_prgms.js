//hellowold 
console.log('Hello world')


//add two numbers
let num1 = 23;
let num2 = 23;
console.log(num1 + num2);


//squre root of number:by using Math.sqrt() we can find sqt of number
let s1 = 4
console.log(Math.sqrt(s1))


//area of traingle
//1st solution
let height = 4;
let base = 4;
let result = height * base / 2;
console.log(result);


//2nd solution
function areaOfTaingle(b, h) {
    return b * h / 2;
}
const b = 4;
const h = 4;
const area = areaOfTaingle(b, h);
console.log(`area of traingle is : ${area}`);


//swap two numbers using temporary variable
let number = 12;
let number1 = 23;
let temp = number;
//console.log(temp) the value is 12
number1 = number;
number1 = temp;
console.log(number1)


//convert km to miles
function convetKmToMiles(km) {
    return km / 1.6093;
}
const km = 46;
const miles = convetKmToMiles(km);
console.log(miles)


//convert celicus to farnheit
function celciusTofarnhiet(C) {
    return (9 / 5) * C + 32;
}
const C = 23;
const f = celciusTofarnhiet(C);
console.log(f)

//check number is positive, negative or zero
let num3 = 12;
if (num3 > 0) {
    console.log('number is positive');
} else if (num3 < 0) {
    console.log('number is negative');
} else {
    console.log('number is zero');
}


//generate random number 
console.log(Math.random())


//check if the number is even or odd
let data = 11;
if (data % 2 === 0) {
    console.log('number is even');
} else {
    console.log('number is odd');
}