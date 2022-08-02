/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

 function solve(first,second){
    let curr1 = first;
    let curr1Nxt = first.next;
    let curr2 = second;
    let curr2Nxt = second.next;
    
    if(first.next===null){
        first.next = curr2;
        return first;
    } 
    
    while(curr1Nxt !== null && curr2 !== null){
        if( (curr2.val <= curr1Nxt.val) && (curr2.val >= curr1.val) ) {
            // adding node
            curr1.next = curr2;
            curr2Nxt = curr2.next;
            curr2.next  = curr1Nxt;
            // set pointers
            curr1 = curr2;
            curr2  = curr2Nxt;
        }else{
            curr1 = curr1Nxt;
            curr1Nxt = curr1Nxt.next;
            if(curr1Nxt === null){
                curr1.next = curr2;
                return first;
            }
        }
    }
    
    return first;
}

var mergeTwoLists = function(list1, list2) {
    if(list1===null){
        return list2;
    }
    if(list2===null){
        return list1;
    }
    if(list1.val <= list2.val){
        return solve(list1,list2);
    }
    else{
        return solve(list2,list1);
    }

};