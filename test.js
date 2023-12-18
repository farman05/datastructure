var merge = function(arr) {
    let i=0;
    for(let j=1;j<arr.length;j++){
        if(arr[i]!=arr[j]){
            console.log({i,j})
            i++;
            arr[i]=arr[j];
        }
    }

    console.log({arr})
    return i+1;
};

console.log(merge([1,1,2]))

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

        
// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]

