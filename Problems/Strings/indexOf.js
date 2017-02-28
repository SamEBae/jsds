// Main
function indexOf(str, subStr, startIndex) {
    var idx = 0,
        counter = 0;

    // if the optional startIndex was passed, set it to that. 
    var i = startIndex | 0;

    for (; i < str.length; i++) {

        if (str[i] == subStr[counter]) {
            counter++;
        } else {
            counter = 0;
        }

        // Check starting point or a match   
        if (counter == 0) {
            idx = i + 1;
        } else if (counter == subStr.length) {
            return idx;
        }
    }

    // Nothing found
    return -1;
}

console.log(indexOf('hello', 'll')); // prints '2'
console.log(indexOf('hello', 'h')); // prints '0'
console.log(indexOf('hello', 'll', 3)); // prints '-1'