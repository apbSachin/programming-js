//**String:string is sequence of charcters in js & string can be declared using ',"", and using `` */

const name = 'sachin';
const fName = "Tejas";
const lName = `Patil`;

//concatinating string using + operator
//const fullName=name + lName;

//concatinating string above appraoch is bad. better way to concat the stirng using backticks
//let result=`My name is ${name} and my surname is ${lName}`;

//another way to declare string in js using new Keyword
const myName = new String('Sachin Biradar'); //it ll give the o/p in the form of object

console.log(myName.length)
console.log(myName.toUpperCase()); //convert uppercase
console.log(myName.indexOf('n'));  //at what index the charcter n is there
console.log(myName.charAt(5));   //which char is there at index 5
console.log(myName.substring(1,5));  //start index include char and end index exclude char and we cant add -ve index value
console.log(myName.slice(-14,5)); //here we can add -ve index value

//**Trim */
const newString="   itsTrim   ";
console.log(newString)
console.log(newString.trim()); //it removes whitespace of start and end of the string 
console.log(newString.trimStart()); //it removes the trim of start of the string
console.log(newString.trimEnd()); //it removes the trim of end of the string


