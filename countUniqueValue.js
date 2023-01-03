/* Implement a function that accepts a sorted array and counts the unique value in the array. There can be negative number in the array but it always be sorted 

countUniqueValues([1,1,1,1,1,2]) //2
countUniqueValues([1,2,2,2,3,4,5]) //5
countUniqueValues([]) //0

*/

const countUniqueValues = (arr)=>{
    // if arr length is 0 then return 0
    if(arr.length == 0){
        return 0
    }

    //start a pointer at 0 for comparsion
    let i = 0;
    for(let j = 1; j < arr.length;j++){
        //if value is not equal then incremnet the i pointer and replace the value of i with j value of array
        if(arr[i] != arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i + 1
}

// console.log(countUniqueValues([]))