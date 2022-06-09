// char. is upper case ? OR lower case ? OR number

let char1 = "a";

if(char1.charCodeAt(0)<=57 && char1.charCodeAt(0)>=48){
    console.log("number")
}else if(char1.charCodeAt(0)<=90 && char1.charCodeAt(0)>=65){
    console.log("upper case")
}else if(char1.charCodeAt(0)<=122 && char1.charCodeAt(0)>=97){
    console.log("lowercase")
}