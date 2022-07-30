/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummmy = new ListNode(-1);
    dummmy.next = head;
    let prev = dummmy;
    let cur = head;
    while(cur){
        if(val === cur.val){
            prev.next = cur.next;
            cur = cur.next;
        }
        else{
            prev = cur;
            cur = cur.next;
        }
    }
    return dummmy.next;
};