// Main
function pigeonHole (arr) {
	var n = arr.length,
		hashArray = [];

    for (var i=0; i < n+1; i++) {
    	hashArray.push(0);
    }

    for (var i=0; i<n; i++) {
        if (arr[i]>=n) {
            hashArray[n]++;
        } else {
            hashArray[arr[i]]++;
        }
    }

    return hashArray;
}

console.log(pigeonHole([3, 0, 6, 1, 5]));
console.log(pigeonHole([0, 1, 2, 3, 4, 5]));