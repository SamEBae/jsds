var DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split('');

function encodeId(num) {
    var base = DICTIONARY.length;
    var encoded = '';

    if (num === 0) {
        return DICTIONARY[0];
    }

    while (num > 0) {
        encoded += DICTIONARY[(num % base)];
        num = Math.floor(num / base);
    }

    return reverseWord(encoded);
}

function reverseWord(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}

function decodeId(id) {
    var base = DICTIONARY.length;
    var decoded = 0;

    for (var index = 0; index < id.split("").length; index++) {
        decoded = decoded * base + DICTIONARY.indexOf(id.charAt(index));
    }

    return decoded;
}

console.log(encodeId(11231230)); // prints 'VhU2'
console.log(decodeId('VhU2')); // prints '11231230'