// Day 1: Reverse a String
// Write a function that takes a string as input and returns the string reversed. For example, if the input is "hello," the output should be "olleh."

// Once you've come up with a solution, share it with me, and we can discuss it. If you have any questions or need clarification, feel free to ask!

//with using in-built function
const reverseStringFn = (str)=>{
        return str.split('').reverse().join('')
}

//without using in-built function
const reverseString = (str)=>{
    let revStr = ""
    for(let i =str.length - 1; i >= 0;i--){
        revStr+= str[i]
    }
    return revStr;
}

console.log(reverseString("hello"))