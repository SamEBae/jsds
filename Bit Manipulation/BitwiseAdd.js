// Main
function BitwiseAdd(a, b){  
    while (b != 0) {
        var carry = (a & b);
        a = a ^ b; 
        b = carry << 1;
    }

    return a;
}

console.log(BitwiseAdd(4,5)); // prints 9