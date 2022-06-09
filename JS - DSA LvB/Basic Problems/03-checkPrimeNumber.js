let num = 17;


let i = 2;
// let flag = 0;
// while(i<num){
//     if(num%i===0){
//         flag++;
//     }
//     i++;
// }
// if(flag===0){
//     console.log("Prime")
// }
// else{
//     console.log("not prime")
// }

while(i<num){
    if(num%i===0){
        console.log("not-prime")
        break;
    }
    else{
        console.log('prime')
        break;
        
       
    }
    i++;
}
