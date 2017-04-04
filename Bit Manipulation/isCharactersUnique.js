function isCharactersUnique(str) {
    // An integer to store presence/absence
    // of 26 characters using its 32 bits.
    var checker = 0;

    for (var i = 0, strLength = str.length; i < strLength; i++) {
        var val = (str.charCodeAt(i) - 'a'.charCodeAt(0));

        // If bit corresponding to current
        // character is already set
        if ((checker & (1 << val)) > 0)
            return false;

        // set bit in checker
        checker |= (1 << val);
    }

    return true;
}

console.log(isCharactersUnique('aabbcc')); // false
// this is because 'a', 'b', and 'c' are repeated
console.log(isCharactersUnique('abc')); // true
// this is because no characters are repeated