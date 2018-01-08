// Helper
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
    value: 712,
    next: {
        value: 213,
        next: {
            value: 1230,
            next: {
                value: 5
            }
        }
    }
};

// Main
function sortLinkedList(head) {
    if (head == null || head.next == null) {
        return head;
    }

    // Step 1. cut the list to two halves
    var prev = null,
        slow = head,
        fast = head;

    while (fast != null && fast.next != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null;

    // Step 2. sort each half
    var l1 = sortLinkedList(head),
        l2 = sortLinkedList(slow);

    // Step 3. merge l1 and l2
    return mergeSortedLinkedListRecursively(l1, l2);
}

// before: 712 -> 213 -> 1230 -> 5
console.log(sortLinkedList(ll1)); // after: 5->213->712->1230