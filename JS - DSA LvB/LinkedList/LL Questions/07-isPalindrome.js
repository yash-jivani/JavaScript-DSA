// brute force solution | time O(n) , space O(n)

function check(arr){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        if(arr[start]!==arr[end]){
            return 0;
        }
        start++;
        end--;
    }
    return 1;
}

function isPalindrome(head)
{
    let arr = [];
    let tmp = head;
    while(tmp){
        arr.push(tmp.data);
        tmp = tmp.next;
    }
    
    return this.check(arr);
}

// optimize solution | time O(n) , space O(1)

function reverseLL(head){
    let prev = null;
    let curr = head;
    let next = null;
    
    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }   
    return prev;
    
}

function isPalindrome(head)
{

    if(head.next===null){
        return 1;
    }
    let fast = head.next;
    let slow  =head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    let middleNode = slow;
    middleNode.next = this.reverseLL(middleNode.next);
    
    let head1 = head;
    let head2 = middleNode.next;
    while(head2){
        if(head1.data!==head2.data){
            return 0;
        }
        head1 = head1.next;
        head2 = head2.next;
    }
    return 1;
}
