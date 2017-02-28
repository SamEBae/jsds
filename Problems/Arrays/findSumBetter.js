// Main
function findSumBetter(arr, weight) {
    var hashtable = {};

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var currentElement = arr[i],
            difference = weight - currentElement;

        // check the right one already exists
        if (hashtable[difference]) {
            return [i, hashtable[weight - currentElement]];
        } else {
            // store index
            hashtable[difference] = i;
        }
    }
    return -1;
}