
/*

Anagrams :
given two strings, write a function to deetermine if the second strnig is an anagram of the first.
And angram is a word, phrase, ot name formed by rearranging the letters of another, 
such as cinema, formed from iceman.

*/



// method 1:
function vaidAnagram(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}

    for(let char of str1){
        if(!frequencyCounter1[char]){
            frequencyCounter1[char] = 1;
        }
        else{
            frequencyCounter1[char]++;
        }
    }

    for(let char of str2){
        if(!frequencyCounter2[char]){
            frequencyCounter2[char] = 1;
        }
        else{
            frequencyCounter2[char]++;
        }
    }

    for(let i in frequencyCounter1){
        if(frequencyCounter1[i]!==frequencyCounter2[i]){
            return false;
        }
    }
    return true;
    
}

console.log('\n:: method 1 ::\n')
console.log(vaidAnagram('',''))
console.log(vaidAnagram('yash','hasy'))
console.log(vaidAnagram('rat','car'))
console.log(vaidAnagram('raa','rra'))
console.log(vaidAnagram('cinema','iceman'))


// method 2:

function vaidAnagram2(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }

    let frequency = {}
    for(let i of str1){
        frequency[i] ? frequency[i]++ : frequency[i]=1
    }

    // m-5 | v-6 | 1:15
    for(let letter of str2){
        if(!frequency[letter]){
            return false;
        }
        else{
            frequency[letter]--
        }
    }
    return true;
}

console.log('\n:: method 2 ::\n')
console.log(vaidAnagram2('',''))
console.log(vaidAnagram2('yash','hasy'))
console.log(vaidAnagram2('rat','car'))
console.log(vaidAnagram2('raa','rra'))
console.log(vaidAnagram2('cinema','iceman'))