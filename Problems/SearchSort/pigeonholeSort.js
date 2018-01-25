function pigeonholeSort(arr) {
	let max = Math.max.apply(Math, arr),
		min = Math.min.apply(Math, arr),
		holes = new Array(arr.length);

	for (let elm of arr) {
		if (holes[elm-min] == undefined) {
			holes[elm-min] = 0;
		}
		holes[elm-min] += 1;
	}

	let index = 0;
	for (let count=0; count<=max; count++) {
		while (holes[count] > 0) {
			holes[count] -= 1;
			arr[index] = count + min;
			index += 1;
		}
	}
	return arr;
}
let myArray = [5,3,8,11];
console.log(pigeonholeSort(myArray));