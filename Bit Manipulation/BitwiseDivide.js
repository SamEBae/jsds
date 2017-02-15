// Helpers
function BitwiseAdd(a, b) {
    while (b != 0) {
        var carry = (a & b);
        a = a ^ b;
        b = carry << 1;
    }

    return a;
}

function BitwiseNegate(a) {
    return BitwiseAdd(~a, 1);
}

function BitwiseSubtract(a, b) {
    return BitwiseAdd(a, BitwiseNegate(b));
}

// Main
function BitwiseDivide(a, b) {
    var c = 0,
        isNegative = 0;

    if (a < 0) {
        a = BitwiseNegate(a); // convert to positive
        isNegative = !isNegative;
    }

    if (b < 0) {
        b = BitwiseNegate(b); // convert to positive
        isNegative = !isNegative;
    }

    if (b != 0) {
        while (a >= b) {
            a = BitwiseSubtract(a, b);
            c++;
        }
    }

    if (isNegative) {
        c = BitwiseNegate(c);
    }

    return c;
}

console.log(BitwiseDivide(10, 2)); // 5
console.log(BitwiseDivide(-10, 2)); // -5
console.log(BitwiseDivide(-200, 4)); // -50