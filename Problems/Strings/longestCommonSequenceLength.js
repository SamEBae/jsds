function lcs(A, B, indexA, indexB) {
	if (indexA <= 0 || indexB <= 0) {
		return 0;
	} else if (A[indexA-1] == B[indexB-1]) {
		return 1 + lcs(A, B, indexA-1, indexB-1);
	} else {
		return Math.max(lcs(A, B, indexA-1, indexB), lcs(A, B, indexA, indexB-1));
	}
}
console.log(lcs("AYXT", "AYZXT", 4, 5)); // 4 ('AYXT')