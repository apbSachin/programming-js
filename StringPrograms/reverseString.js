//reverse words in given string
const name="Sachin";
//split it ll convert into array 
const result=name.split('').reverse().join('');
console.log(result);

//using function
function reverseString(str){
    let charArray=str.split('');
    let rvrse=charArray.reverse();
    let binding=rvrse.join('');
    return binding;
}
let inputString='My name is Sachin';
console.log(reverseString(inputString));