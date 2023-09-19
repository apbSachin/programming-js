//check whether the string is palindrome or not

function isPalindrome(str){
    const inpString=str.toLowerCase().replace(`[a-z0-9]/g`,'');
    const otString=inpString.split('').reverse().join('');

return otString===inpString;
}

const prmpt="gadag";
console.log(isPalindrome(prmpt));