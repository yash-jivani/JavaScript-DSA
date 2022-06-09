let i = 1;
let n = 6;

let track = n;
while(i<=n){
    let start = track;
    let j = 1;
    while(j<=i){
        process.stdout.write(`${start} `);
        start++;
        j++;
    }
    console.log()
    track--;
    i++;

}