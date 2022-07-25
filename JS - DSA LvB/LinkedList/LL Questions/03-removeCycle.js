function removeLoop(head) {
    let slow = head;
    let fast = head;
    let loopFound = false;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;

        if (fast === slow) {
        loopFound = true;
        break;
        }
    }
    if (loopFound) {
        slow = head;
        let tmp = fast;
        while (slow !== tmp) {
            slow = slow.next;
            tmp = tmp.next;
        }
        let ptr = tmp;
        while (ptr.next !== tmp) {
            ptr = ptr.next;
        }
        ptr.next = null;
    }
}
