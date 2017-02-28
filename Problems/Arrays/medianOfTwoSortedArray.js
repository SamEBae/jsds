// Helper
function medianOfArray(array) {
    var length = array.length;

    // Odd
    if (length % 2 == 1) {
        return array[Math.floor(length / 2)];
    } else {
        // Even
        return (array[length / 2] + array[length / 2 - 1]) / 2
    }
}

// Main
function medianOfTwoSortedArray(arr1, arr2, pos) {
    // arr2 is the bigger array
    if (pos <= -1) {
        return -1;
    }
    if (pos == 1) {
        return (arr1[0] + arr2[0]) / 2;
    }
    if (pos == 2) {

        return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1])) / 2;
    }

    var median1 = medianOfArray(arr1),
        median2 = medianOfArray(arr2);

    if (median1 == median2) {
        return median1;
    }

    var evenOffset = pos % 2 == 0 ? 1 : 0;

    if (median1 < median2) {
        return medianOfTwoSortedArray(arr1.slice(Math.floor(pos / 2) - evenOffset), arr2, Math.floor(pos / 2) + evenOffset);
    } else {
        return medianOfTwoSortedArray(arr2.slice(Math.floor(pos / 2) - evenOffset), arr1, Math.floor(pos / 2) + evenOffset);
    }
}

console.log(medianOfTwoSortedArray([1, 2, 3], [4, 5, 6], 3)); // 3
console.log(medianOfTwoSortedArray([11, 23, 24], [32, 33, 450], 3)); // 27.5