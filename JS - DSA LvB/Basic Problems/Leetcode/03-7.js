let ans = 0;

let num = -123;

function reverse(num){

    if(num>0){
        while(num!==0){
            let digit = num%10;
            ans = (ans * 10 ) + digit;
            num = Math.floor(num / 10);
        }
        return ans;
    }else{
        num = Math.abs(num);
        while(num!==0){
            let digit = num%10;
            ans = (ans * 10 ) + digit;
            num = Math.floor(num / 10);
        }
        return -ans;
    }
}


console.log(reverse(num))