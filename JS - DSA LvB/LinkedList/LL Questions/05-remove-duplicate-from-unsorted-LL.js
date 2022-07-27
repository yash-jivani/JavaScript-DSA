function removeDuplicates(head)
{
    
    let tmp = head;
    let prev = head;
    let myMap = {};
    
    while(tmp!==null){
        if(myMap[tmp.data]){
            
            while(prev.next!==tmp){
                prev = prev.next;
            }
            prev.next = tmp.next;
            tmp = tmp.next;
            
        }else{
            myMap[tmp.data] = true;
            tmp = tmp.next;
        }
        
    }
    return head;

}