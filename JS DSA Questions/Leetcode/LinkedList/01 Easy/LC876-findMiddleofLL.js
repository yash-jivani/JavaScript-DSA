var middleNode = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        fast = fast.next;
        if(fast){
            fast = fast.next;
        }
        slow = slow.next;
        
    }
    head = slow;
    return head;
};