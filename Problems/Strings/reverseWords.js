// Main
function reverseWords(str) {
    var temp = "",
        reversedSetence = "";

    for (var i = 0; i < str.length; i++) {

        // only put the extra space if not the last word
        var spaceForWord = i === str.length - 1 ? "" : " ";

        // if space is encountered 
        if (str.charAt(i) === " ") {
            // reverse and concat
            reversedSetence += reverseString(temp) + spaceForWord;
            // reset the temp
            temp = "";
        } else {
            temp += str.charAt(i);
        }

        // reached the end of the input
        if (i === str.length - 1) {
            reversedSetence += reverseString(temp);
        }
    }

    return reversedSetence;
}

function reverseString(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}
console.log(reverseWords("hello how are you doing"));