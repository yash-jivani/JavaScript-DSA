var removeOccurrences = function(s, part) {

    // creating regex with RegExp() constructor
    let regex = new RegExp(part,'i')
    // console.log(regex.test(s))

    while(regex.test(s)){
        s= s.replace(regex,"")
    }
    return s;
};

console.log(removeOccurrences("daabcbaabcbc","abc"))
console.log(removeOccurrences("axxxxyyyyb","xy"))
console.log(removeOccurrences("aabababa","aba"))
