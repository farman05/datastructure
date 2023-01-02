/* Write a function which accepts two arrays.The function should return true if every value in array has it corresponding value squared in the second array.The frequency of value must be same

Ex
func([1,2,3], [4,9,1]) // true as the second array contains the square of all numbers in first array
func([1,2,3], [1,4])   // false as the length of two arrays doesn't match
func([1,3,1], [1,9,9]) // false as the value in the second array should be of same frequency 

*/

//time complexity O(n^2)
const navieApproach = (array1, array2)=>{
    //no need to go further if the two array length doesn't matches
    if(array1.length != array2.length){
        return false
    }
    //looping through array1
    for(let i = 0; i < array1.length; i++){
        //check if square of array1 is present in array2 and get it index
        const findIndex = array2.indexOf(array1[i] ** 2)
        //if not present then return false
        if(findIndex === -1){
            return false
        }
        //if present then splice it from array2 and continue with looping
        array2.splice(findIndex,1)
    }

    return true
}

// console.log(navieApproach([1,3,1], [1,9,1]))

//time complexity O(n)

const betterApproach = (array1, array2) =>{
  //no need to go further if the two array length doesn't matches
  if(array1.length != array2.length){
    return false
  }   

  //declare two object for holding frequency of array value
  let frequency1 = {}
  let frequency2 = {}

  //loop through both the array in two loop and count the value frequency

  for(let val of array1){
      frequency1[val] = (frequency1[val] || 0 ) + 1
  }

  for(let val of array2){
    frequency2[val] = (frequency2[val] || 0 ) + 1
  }

  //looping through frequency1 object
  for(let key in frequency1){
    //if square of key not present in frequency2 then return false
    if(!(key ** 2 in frequency2)){
        return false
    }

    //if the frequncy value didn't occurs same time then return false
    if(frequency2[key ** 2] !== frequency1[key]){
        return false
    }
  }

  return true

}

// console.log(betterApproach([1,3,1], [1,9,1]))

