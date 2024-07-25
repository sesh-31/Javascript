let num = Number(prompt("Enter your number: "));
let fact = 1; // Initialize fact variable
function funToFact(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        for (let i = 2; i <= num; i++) {
            fact *= i;
        }
        return fact;
    }
}

console.log(`The factorial of ${num} is: `, funToFact(num));
