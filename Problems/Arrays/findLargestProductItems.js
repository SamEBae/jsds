// Main
// Realize that greatest product of two is yielded by the greatest sum of the two
function findLargestProductItems(arr) {
    var secondHighest = -Infinity,
        highest = -Infinity;

    for (var i = 0, arrLength = arr.length; i < arrLength; i++) {
        var current = arr[i];

        if (current > highest) {
            secondHighest = highest;
            highest = current;
        } else if (current > secondHighest) {
            secondHighest = current;
        }
    }
    return [secondHighest, highest];
}

console.log(findLargestProductItems([12, 13, 17, 10, 34, 1])); // [34, 17]
console.log(findLargestProductItems([12, 13, 17, 10, 1])); // [13, 17]