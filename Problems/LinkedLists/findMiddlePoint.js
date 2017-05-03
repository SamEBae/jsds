// Main
function findMiddlePoint(head) {
    if (head == null)
        return null;

    var temp = head,
        fast = temp,
        slow = head;

    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}

var ll1 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 5,
                next: {
                    value: 17,
                    next: {
                        value: 21
                    }
                }
            }
        }
    }
};

console.log(findMiddlePoint(ll1)); // ll1 starting with 5