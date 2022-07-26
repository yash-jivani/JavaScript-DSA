function removeDuplicates(head) {
    let tmp = head;

    while (tmp.next !== null) {
        if (tmp.data === tmp.next.data) {
            tmp.next = tmp.next.next;
        } else {
            tmp = tmp.next;
        }
    }
    return head;
}
