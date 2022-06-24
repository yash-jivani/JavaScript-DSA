var isAnagram = function(s, t) {
    
    if(s.length!==t.length){
        return false;
    }
    
    let sCharCount = {};

    for(let i=0;i<s.length;i++){
        sCharCount[s[i]] = sCharCount[s[i]]+1 || 1;
    }
    
    for(let i=0;i<t.length;i++){
        if(!sCharCount[t[i]]){
            return false;
        }else{
            sCharCount[t[i]]--;
        }
    }
    return true;
};

console.log(isAnagram("anagram","nagaram"));