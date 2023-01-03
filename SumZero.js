/* Write a function  which accepts a sorted array of integers. The function should find the first pair where sum
is 0.Return an array that includes both the value that sum to zero or undefined if the pair does not exist 

sumZero([-3,-2,-1,0,1,2,3]) // [-3,3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined
*/
//Time complexity O(N^2)
const navieApproach = (arr)=>{
    //two looping of arr for getting the sum
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1 ; j < arr.length; j++){
            if(arr[i] + arr[j] == 0){
                return [arr[i], arr[j]]
            }
        }
    }
} 

// console.log(navieApproach([-2,0,1,3]))

//Time complexity O(N)
//multiple pointers pattern
const betterApproach = (arr)=>{
    //two pointers where i holds the 0th index first and j holds the last index of the array 
    let i = 0
    let j = arr.length - 1

    while(i < j){
        let sum = arr[i] + arr[j]
        if(sum === 0){
            return [arr[i], arr[j]]    
        }else if(sum > 0){ // if sum is greater then 0 then need to decrement the index of j
            j--
        }else{ // if sum is less then 0 then need to increment  the index of i
            i++
        }
    }
}

// console.log(betterApproach([-3,-2,-1,0,1,2,3]))
