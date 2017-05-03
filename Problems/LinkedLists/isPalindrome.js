// Helper
function reverseSinglyLinkedList(node) {
    var prev = null;

    while (node) {
        var temp = node.next;
        node.next = prev;
        prev = node;
        if (!temp)
            break;
        node = temp;
    }
    return node;
}

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

// Main
var isPalindrome = function(head) {
    if (head == null) {
        return true;
    }

    var tempHead = head,
        midPoint = findMiddlePoint(tempHead),
        latterReversed = reverseSinglyLinkedList(midPoint);

    while (latterReversed != null) {
        if (latterReversed.val != tempHead.val)
            return false;

        latterReversed = latterReversed.next;
        tempHead = tempHead.next;
    }
    return true;
}