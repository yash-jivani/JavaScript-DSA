// check if rotated string is exists OR not in main string

function rotateStr(s,goal){
    if(s.length===0 && goal.length===0){
        return true;
    }
    if(s.length !== goal.length){
        return false;
    }
    s = s + s;
    return s.includes(goal)
}

console.log(rotateStr("abcde","cdeab"));
console.log(rotateStr("abcde","abced"));

