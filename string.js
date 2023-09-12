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

//**replace() */
const url="https://sachinbiradar%20gmail.com"; //if you give space it ll be consider as %20
const result=url.replace('%20','@');
console.log(result);
console.log(url.includes('sachin'));  //it ll give true or false based on whether the string contain that value or not


//**split() : takes string and divides substring based on seperator and put that into array */
const newName="Virat_Kohli_Dhoni";
console.log(newName.split('_'));

//**padStart(): it pads the one string with another string */
const str1 = '5';
console.log(str1.padStart(4, '0'));


//**padEnd():it pads the at the end of the string */
const str2='9';
console.log(str2.padEnd(4,'0'));


