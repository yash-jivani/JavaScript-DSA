let i = 1;
let n = 5;

let times = n;

while(i<=n){
    let spaces = i-1;
    let j = 1;
    while(spaces){
        process.stdout.write(" ");
        spaces--;
    }
    while(j<=times){
        process.stdout.write("* ");
        j++;
    }
    times--;

    console.log()
    i++;
}