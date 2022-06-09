let n = 4;

let i = 1;
while(i<=n){

    let spaces = n-i;
    while(spaces){
        process.stdout.write(" ");
        spaces--;
    }
    let j = 1
    while(j<=i){
        process.stdout.write(`* `)
        j++;
    }
    console.log(" ")
    i++;

}