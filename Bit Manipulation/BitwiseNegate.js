// Helpers
function BitwiseAdd(a, b){  
    while (b != 0) {
        var carry = (a & b);
        a = a ^ b; 
        b = carry << 1;
    }

    return a;
}

// Main
function BitwiseNegate(a) {
    return BitwiseAdd(~a,1);
}

console.log(BitwiseNegate(9)); // -9
// negation with itself gives back original
console.log(BitwiseNegate(BitwiseNegate(9))); // 9 