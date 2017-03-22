// Main
function isIsomorphic(s, t) {
    var sCharArray = [],
        tCharArray = []; //  max size 256 this is for use of .charCodeAt

    for (var i = 0, stLength = s.length; i < stLength; i++) {
        var sCurrent = s.charCodeAt(i),
            tCurrent = t.charCodeAt(i);

        if (sCharArray[sCurrent] == null)
            sCharArray[sCurrent] = 0;
        if (tCharArray[tCurrent] == null)
            tCharArray[tCurrent] = 0;

        if (sCharArray[sCurrent] == 0 && tCharArray[tCurrent] == 0) {
            sCharArray[sCurrent] = tCurrent;
            tCharArray[tCurrent] = sCurrent;
        } else if (tCharArray[tCurrent] != sCurrent || sCharArray[sCurrent] != tCurrent) {
            return false;
        }
    }
    return true;
};

var testSet1 = ["egg", "add"],
    testSet2 = ["foo", "bar"],
    testSet3 = ["paper", "title"];

console.log(isIsomorphic(testSet1[0], testSet1[1])); // true
console.log(isIsomorphic(testSet2[0], testSet2[1])); // false
console.log(isIsomorphic(testSet3[0], testSet3[1])); // true