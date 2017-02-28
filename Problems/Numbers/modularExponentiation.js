// Main
function modularExponentiationNaive(base, exponent, modulus) {
    return Math.pow(base, exponent) % modulus;
}

function modularExponentiation(base, exponent, modulus) {
    if (modulus == 1) return 0;

    var value = 1;

    for (var i = 0; i < exponent; i++) {
        value = (value * base) % modulus;
    }
    return value;
}