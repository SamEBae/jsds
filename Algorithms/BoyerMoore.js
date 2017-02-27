// Main
function boyerMoore(haystack, needle) {
    var badMatchTable = {};
    var maxOffset = haystack.length - needle.length;
    var offset = 0;
    var last = needle.length - 1;
    var scan;

    if (last < 0) return 0

    // Generate the bad match table, which is the location of offsets
    // to jump forward when a comparison fails
    for (var i = 0; i < needle.length - 1; i++) {
        badMatchTable[needle[i]] = last - i;
    }

    // Now look for the needle
    while (offset <= maxOffset) {
        // Search right-to-left, checking to see if the current offset at 
        // needle and haystack match.  If they do, rewind 1, repeat, and if we 
        // eventually match the first character, return the offset.
        for (scan = last; needle[scan] === haystack[scan + offset]; scan--) {
            if (scan === 0) {
                return offset;
            }
        }

        offset += badMatchTable[haystack[offset + last]] || last || 1;
    }

    return -1;
}