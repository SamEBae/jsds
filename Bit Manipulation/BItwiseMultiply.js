// Main
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
function BitwiseMultiply(a, b) {
    var m = 1,
        c = 0;

    if (a < 0) {
        a = BitwiseNegate(a);
        b = BitwiseNegate(b);
    }

    while (a >= m && b) {
        if (a & m) {
            c = BitwiseAdd(b, c);
        }
        b = b << 1;
        m = m << 1;
    }
    return c;
}

console.log(BitwiseMultiply(4, 5)); // 20