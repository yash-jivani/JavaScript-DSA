// approach 1 :: 
// data replacement

function segregate(head);
{
    let zeros = 0;
    let ones = 0;
    let twos = 0;

    let tmp = head;
    while (tmp !== null) {
        if (tmp.data === 0) {
            zeros++;
        } else if (tmp.data === 1) {
            ones++;
        } else if (tmp.data === 2) {
            twos++;
        }
        tmp = tmp.next;
    }

    tmp = head;
    while (tmp !== null) {
        if (zeros) {
            tmp.data = 0;
            zeros--;
        } else if (ones) {
            tmp.data = 1;
            ones--;
        } else if (twos) {
            tmp.data = 2;
            twos--;
        }
        tmp = tmp.next;
    }
    return head;
}


// approach 2 :: 
// without data replacement