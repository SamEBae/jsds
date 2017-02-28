// Main
function removeExtraSpaces(str) {
    var newString = "",
        lastChar = " ";

    for (var i = 0, strLength = str.length; i < strLength; i++) {

        var currentChar = str.charAt(i),
            currentAndLastIsSpace = lastChar == " " && currentChar == " ",
            nextCharIsSpace = (i < strLength - 1 && str.charAt(i + 1) == " " && currentChar == " ");

        if (!(currentAndLastIsSpace || nextCharIsSpace)) {
            newString += currentChar;
        }

        lastChar = currentChar;
    }
    return newString;
}

console.log(removeExtraSpaces(" hello.   how are you doing?     ")); // "hello.how are you doing?"