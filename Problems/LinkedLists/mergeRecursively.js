// Main
function mergeSortedLinkedListRecursively(a, b) {
    if (a == null) {
        return b;
    }
    if (b == null) {
        return a;
    }

    if (a.value < b.value) {
        a.next = mergeSortedLinkedListRecursively(a.next, b);
        return a;
    } else {
        b.next = mergeSortedLinkedListRecursively(b.next, a);
        return b;
    }
}

var ll1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 5
            }
        }
    }
};
var ll2 = {
    value: 4,
    next: {
        value: 6
    }
};

console.log(mergeSortedLinkedListRecursively(ll1, ll2)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6