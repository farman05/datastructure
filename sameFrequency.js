/*
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false
*/

const sameFrequency = (n1,n2)=>{
    let num1 = n1.toString()
    let num2 = n2.toString()

    if(num1.length != num2.length){
        return false
    }
    let frequency1 = frequencyCounter(num1)
    let frequency2 = frequencyCounter(num2)
    for(let n in frequency1){
        if(frequency1[n] != frequency2[n]){
            return false
        }
    }

    return true
}

const frequencyCounter = (arr)=>{
    let frequency = {}
    for(let n of arr){
        frequency[n] = (frequency[n] || 0) + 1
    }

    return frequency
}

// console.log(sameFrequency(22,222))