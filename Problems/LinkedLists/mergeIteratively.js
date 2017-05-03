function mergeInteratively(l1, l2) {
    var l = {
        value: 0,
        next: null
    };
    var p = l;

    while (l1 != null && l2 != null) {
        if (l1.value < l2.value) {
            p.next = l1;
            l1 = l1.next;
        } else {
            p.next = l2;
            l2 = l2.next;
        }
        p = p.next;
    }

    if (l1 != null)
        p.next = l1;

    if (l2 != null)
        p.next = l2;

    return l.next;
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

console.log(mergeInteratively(ll1, ll2)); // 1 -> 2 -> 3 -> 4 -> 5 -> 6