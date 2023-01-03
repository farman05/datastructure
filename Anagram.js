/*
Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

validAnagram('', '') // true
validAnagram('aaz', 'zza') // false
validAnagram('anagram', 'nagaram') // true
validAnagram("rat","car") // false) // false
validAnagram('awesome', 'awesom') // false
validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
*/

// a common frequency counter problem, explanation is there in Same.js so to understand the working please go through it
const validAnagram = (str1, str2)=>{
    if(str1.length != str2.length){
        return false
    }

    let str1Frequency = makeFrequency(str1)
    let str2Frequency = makeFrequency(str2)
    
    for(let key in str1Frequency){
        if(str1Frequency[key] != str2Frequency[key]){
            return false
        }
    }

    return true
}

const makeFrequency = (str)=>{
    let frequency = {}
    for(let st of str){
        frequency[st] = (frequency[st] || 0) + 1
    }

    return frequency
}

// console.log(validAnagram("rat","car"))


