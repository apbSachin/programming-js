//check th number is prime or not
function primeNumber(num) {
    if (num <= 0) { return false };
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(primeNumber(5));