function preProcessPattern(ptrn) {
    var i = 0, j = -1;
    var ptrnLen = ptrn.length;
    var b = new Array(ptrnLen + 1);
    
    b[i] = j;
    while (i < ptrnLen) {            
            while (j >= 0 && ptrn[i] != ptrn[j]) {
            // if there is mismatch consider the next widest border
            // The borders to be examined are obtained in decreasing order from 
            //  the values b[i], b[b[i]] etc.
            j = b[j];
        }
        i++;
        j++;
        b[i] = j;
    }
    return b;
}


function searchSubString(text, ptrn) {
    var i = 0, j = 0;
    // pattern and text lengths
    var ptrnLen = ptrn.length,
        txtLen = text.length;

    // initialize new array and preprocess the pattern
    var b = preProcessPattern(ptrn);

    while (i < txtLen) {
        while (j >= 0 && text[i] != ptrn[j]) {
            j = b[j];
        }
        i++;
        j++;

        // a match is found
        if (j == ptrnLen) {
            return i - ptrnLen
            j = b[j];
        }
    }
}

console.log(searchSubString('mississippi', 'iss')); // 4