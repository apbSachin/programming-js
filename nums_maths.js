const score = 350;
console.log(score); //350 output ll get llike this

const finalScore = new Number(450);
console.log(finalScore) //u llget output like this [Number: 450] it shows u assigned value is number';

console.log(finalScore.toString()) //number into string if u check typeof 
console.log(finalScore.toFixed(2)); // 450.00 like this we get output

const num = 123.8283;
console.log(num.toPrecision(3)); //124 it ll give preference before dot and return string

const val=1000000;
console.log(val.toLocaleString('en-IN')) //it ll give like this 1,000,000 want to convert indian use 'en-IN' 10,00,000