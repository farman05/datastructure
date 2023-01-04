/* Write a function which accepts an array of integers and a number called n.The function should calculate the maximum sum of n consecutive elements in the array.
Ex 
    func([1,2,5,2,8,1,5],2) // 10
    func([1,2,5,2,8,1,5],4) // 17

*/
//time complexity O(N^2)
const navieApproach = (arr,n)=>{
    if(arr.length < n){
        return null
    }
    let max = -Infinity 
    //i < arr.length - n + 1, as we have to stop the loop before it gets n number to add 
    for(let i = 0; i < arr.length - n + 1;i++){
        let temp = 0
        for(let j = 0;j< n;j++){
            temp += arr[i + j]
        }

        if(temp > max){
            max = temp
        }
    }
    return max

}
// console.log(navieApproach([1,2,5,2,8,1,5],4))

//time complexity O(N)
const betterApproach = (arr,n)=>{
    if(arr.length < n){
        return null
    }
    let maxNum = 0
    //get the sum of the n number first
    for(let i = 0; i < n; i++){
        maxNum += arr[i]
    }
    let tempMaxNum = 0;

    for(let j = n;j<arr.length;j++){
        //keep removing the start value arr[j-n] and adding the new value 
        tempMaxNum = maxNum - arr[j - n] + arr[j]
        maxNum = Math.max(tempMaxNum, maxNum);
    }
    return maxNum
}

// console.log(betterApproach([1,2,5,2,8,1,5],2))
