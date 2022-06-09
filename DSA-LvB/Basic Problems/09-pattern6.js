let n = 10;
let i = 1;
let num1_count = n;
let num2_count = n;

while(i<=n){
    // part1-num
    let j = 1;
    while(j<=num1_count){
        process.stdout.write(` ${j}`);
        j++;
    }
    num1_count--;
    
    // part1-star

    let star1 = i-1;
    while(star1){
        process.stdout.write(" *")
        star1--;
    }
    
    // part2-star
    
    let star2 = i-1;
    while(star2){
        process.stdout.write(" *")
        star2--;
    }

    // part2-num
    let k = 1
    while(num2_count>=k){
        process.stdout.write(` ${num2_count}`);
        num2_count--;
    }

    num2_count = n-i;

    console.log()
    i++;
}