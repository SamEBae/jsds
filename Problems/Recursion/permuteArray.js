function swap(strArr, index1, index2) {
    var temp = strArr[index1];
    strArr[index1] = strArr[index2];
    strArr[index2] = temp;
}

function permute(strArr, begin, end) {
    if (begin == end) {
        console.log(strArr);
    } else {
        for (var i = begin; i < end + 1; i++) {
            swap(strArr, begin, i);
            permute(strArr, begin + 1, end);
            swap(strArr, begin, i);
        }
    }
}

function permuteArray(strArr) {
    permute(strArr, 0, strArr.length - 1);
}

permuteArray(["A", "C", "D"]);
// ["A", "C", "D"]
// ["A", "D", "C"]
// ["C", "A", "D"]
// ["C", "D", "A"]
// ["D", "C", "A"]
// ["D", "A", "C"]