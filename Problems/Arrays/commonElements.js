// Main
function commonElements(arr1, arr2, arr3) {
    var hashmap = {},
    	last,
    	answer = [];

    for (var i = 0, arr1Length = arr1.length; i < arr1Length; i++) {
        var currentElement = arr1[i];

        if (last != currentElement) {
            if (!hashmap[currentElement]) {
                hashmap[currentElement] = 0;
            } else {
                hashmap[currentElement]++;
            }
        }
        last = currentElement;
    }
    
    last = null;

    for (var i = 0, arr2Length = arr2.length; i < arr2Length; i++) {
        var currentElement = arr2[i];

        if (last != currentElement) {
            if (!hashmap[currentElement]) {
                hashmap[currentElement] = 0;
            } else {
                hashmap[currentElement]++;
            }
        }
        last = currentElement;
    }

    last = null;

    for (var i = 0, arr3Length = arr3.length; i < arr3Length; i++) {
        var currentElement = arr3[i];

        if (last != currentElement) {
            if (!hashmap[currentElement]) {
                hashmap[currentElement] = 0;
            } else {
                hashmap[currentElement]++;
            }
        }
        last = currentElement;
    }

    // Iterate through hashmap
    for (var prop in hashmap) {
        if (hashmap[prop] == 3) {
            answer.push(prop);
        }
    }

    return answer;
}