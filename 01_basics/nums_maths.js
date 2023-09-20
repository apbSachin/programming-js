const score = 350;
//console.log(score); //350 output ll get llike this

const finalScore = new Number(450);
//console.log(finalScore) //u llget output like this [Number: 450] it shows u assigned value is number';

//console.log(finalScore.toString()) //number into string if u check typeof 
//console.log(finalScore.toFixed(2)); // 450.00 like this we get output

const num = 123.8283;
//console.log(num.toPrecision(3)); //124 it ll give preference before dot and return string

const val=1000000;
//console.log(val.toLocaleString('en-IN')) //it ll give like this 1,000,000 want to convert indian use 'en-IN' 10,00,000

const num1="45";
//console.log(parseInt(num1)) //convert string into number

const num2="45.36";
//console.log(parseFloat(num2))  //convert decimal string into number

//++++++++++++++++ Math +++++++++++++++++

console.log(Math) //it returns like this => Object [Math] {}
console.log(Math.abs(-5)) //return -5 to +5
console.log(Math.round(4.4)) //return the nearest integer
console.log(Math.ceil(2.3)) //it ll return 3 up value
console.log(Math.floor(2.6)) //it ll return the lowest value 2
console.log(Math.min(2, 6, 1, 8)) //return min value
console.log(Math.max(2, 6, 1, 8)) //return max value
console.log(Math.random()) //alwasy u get value between 0-1

//important syntx
const min=10;
const max=23;

console.log(Math.floor(Math.random()*(max-min)+1)+10);