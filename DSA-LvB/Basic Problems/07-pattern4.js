let i = 1;
let n = 4;
let times = n
while(i<=n){
    let j = times;
    while(j){
        process.stdout.write("* ");
        j--;
    }
    times--;
    console.log();
    i++;
}
