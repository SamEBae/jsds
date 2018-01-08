function compressString(longString) {
    var counter = 1,
        answer = '',
        last = longString.charAt(0);

    for (var i = 1; i < longString.length; i++) {
        var current = longString.charAt(i);

        if (last == current) {
            counter++;
        } else {
            answer += last + counter.toString();
            counter = 1;
        }

        last = current;

        if (i == longString.length - 1) {
            answer += last + counter.toString();
        }
    }
    if (answer.length > longString.length)
        return longString;
    return answer;
}

console.log(compressString('AAABCCDDDD'));