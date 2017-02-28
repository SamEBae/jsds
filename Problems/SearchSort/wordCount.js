// Main
function wordCount(sentence) {
    // period with nothing so it doesn't count as word
    var wordsArray = sentence.replace(/[.]/g, "").split(" "),
        occurenceList = {},
        answerList = {},
        arrayTemp = [];

    for (var i = 0, wordsLength = wordsArray.length; i < wordsLength; i++) {
        var currentWord = wordsArray[i];
        if (!occurenceList[currentWord]) { // doesn't exist, set as 1st occurrence
            occurenceList[currentWord] = 1;
        } else {
            occurenceList[currentWord]++; // add occurrences
        }
    }

    // push the value and key as fixed array
    for (var prop in occurenceList) {
        arrayTemp.push([occurenceList[prop], prop]);
    }

    function sortcomp(a, b) {
        return b[0] - a[0]; // compare the first element of the array
    }

    arrayTemp.sort(sortcomp); //sort

    for (var i = 0, arrlength = arrayTemp.length; i < arrlength; i++) {
        var current = arrayTemp[i];
        answerList[current[1]] = current[0]; // key value pairs
    }
    return answerList;
}
console.log(wordCount("practice makes perfect. get perfect by practice. just practice")); // practice: 3, perfect: 2, makes: 1, get: 1, by: 1 }