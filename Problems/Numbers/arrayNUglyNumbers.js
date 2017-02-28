// Helpers
function maxDivide(number, divisor) {
    while (number % divisor == 0) {
        number /= divisor;
    }
    return number;
}

function isUgly(number) {
    number = maxDivide(number, 2);
    number = maxDivide(number, 3);
    number = maxDivide(number, 5);
    return number === 1;
}

// Main
function arrayNUglyNumbers(n) {
    var counter = 0,
        currentNumber = 1,
        uglyNumbers = [];

    while (counter != n) {

        if (isUgly(currentNumber)) {
            counter++;
            uglyNumbers.push(currentNumber);
        }

        currentNumber++;
    }

    return uglyNumbers;
}

console.log(arrayNUglyNumbers(11)); // [1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15]