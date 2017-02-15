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
function BitwiseDividePositive(a, b) {
    var c = 0;

    if (b != 0) {
        while (a >= b) {
            a = BitwiseSubtract(a, b);
            c++;
        }
    }
    return c;
}

console.log(BitwiseDividePositive(10, 2)); // 5