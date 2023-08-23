//check th number is prime or not
function primeNumber(num) {
    if (num <= 1) {
        return false  //since prime no are greater than 1 any no which is less than 1 is not prime no 
    };
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
const num=17;
console.log(primeNumber(num));