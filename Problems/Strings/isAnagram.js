// Main
function isAnagram(str1, str2) {
    return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function isAnagramBetter(str1, str2) {
    var hash1 = {},
        hash2 = {};
    if (str1.length != str2.length) return false;

    for (var i = 0, str1Length = str1.length; i < str1Length; i++) {
        if (hash1[str1.charAt(i)])
            hash1[str1.charAt(i)]++;
        else
            hash1[str1.charAt(i)] = 1;
    }

    for (var i = 0, str2Length = str2.length; i < str2Length; i++) {
        if (hash2[str2.charAt(i)])
            hash2[str2.charAt(i)]++;
        else
            hash2[str2.charAt(i)] = 1;
    }

    for (var prop in hash1) {
        if (!hash2[prop] || hash2[prop] !== hash1[prop])
            return false;
    }
    return true;
}