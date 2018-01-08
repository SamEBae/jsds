function convertToStringBaseX(num, x) {
    var abs = Math.abs(num),
        answer = '';

    while (abs) {
        answer = (abs % x) + answer;
        abs = Math.floor(abs / x);
    }

    if (num < 0) {
        answer = '-' + answer;
    }

    return answer;
}

console.log(convertToStringBaseX(100, 7)); // 202