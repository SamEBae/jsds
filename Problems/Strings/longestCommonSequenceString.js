function lcs(A, B, indexA, indexB) {
    if (indexA <= 0 || indexB <= 0) {
        return '';
    } else if (A[indexA - 1] == B[indexB - 1]) {
        return lcs(A, B, indexA - 1, indexB - 1) + A[indexA - 1];
    } else {
        var temp1 = lcs(A, B, indexA - 1, indexB),
            temp2 = lcs(A, B, indexA, indexB - 1);

        if (temp1.length == temp2.length) {
            return temp1;
        } else if (temp1.length > temp2.length) {
            return temp1;
        } else {
            return temp2;
        }
    }
}
console.log(lcs("AYXT", "AYZXT", 4, 5)); // 'AYXT'