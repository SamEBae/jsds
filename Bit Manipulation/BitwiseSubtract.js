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

// Main
function BitwiseSubtract(a, b) {
    return BitwiseAdd(a, BitwiseNegate(b));
}

console.log(BitwiseSubtract(5, 4)); // prints 1