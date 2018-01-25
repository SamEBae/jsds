function BoyerMooreVote(arr) {
	let count = 0,
		candidate = 0;

	for (let i=0; i < arr.length; i++) {
		if (count == 0){
			candidate = arr[i];
			count = 1;
		} else {
			if (arr[i] == candidate) {
				count += 1;
			} else {
				count -= 1;
			}
		}
	}

	if (count == 0) {
		return null;
	}
	count = 0;
	for (let i=0; i < arr.length; i++) {
		if (candidate == arr[i]) {
			count += 1;
		}
	}
	if (count > Math.floor(arr.length/2)) {
		return candidate;
	} else {
		return null;
	}
}

console.log(BoyerMooreVote([1,23,4,1,2,1,1,1,1,1])); // 1
console.log(BoyerMooreVote([1,2,3])); // null