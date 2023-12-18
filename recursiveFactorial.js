// const factorial = (n)=>{
//     if(n == 1){
//         return 1
//     }

//     return n * factorial(n - 1)
// }


// //5431 => 5 + 4 + 3 + 1 => 13 => 4
// const sum = (n)=>{
//     let num = 0
//     n = n.toString()
//     for(let i=0;i<n.length;i++){
//         num += parseInt(n[i])
//     }

//     if(num < 10){
//         return num
//     }else{
//         return sum(num)
//     }
// }

// console.log(sum("5431"))

function maxBeautyArray(N, K, A) {
    const frequencyMap = new Map();
    let left = 0;
    let maxFrequency = 0;
    let maxBeauty = 0;
  
    for (let right = 0; right < N; right++) {
      const num = A[right];
      frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
      maxFrequency = Math.max(maxFrequency, frequencyMap.get(num));
  
      const windowSize = right - left + 1;
      if (windowSize - maxFrequency <= K) {
        maxBeauty = Math.max(maxBeauty, windowSize);
      } else {
        const leftNum = A[left];
        frequencyMap.set(leftNum, frequencyMap.get(leftNum) - 1);
        if (frequencyMap.get(leftNum) === 0) {
          frequencyMap.delete(leftNum);
        }
        left++;
      }
    }
    console.log({frequencyMap})
    return maxBeauty;
  }
  
//   const N = 3;
//   const K = 210;
//   const A = [-100, -100, 5];
//   const result = maxBeautyArray(N, K, A);
//   console.log(result); // Output: 3


  function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  
  function toBinaryPalindromicNumber(N) {
    let num = N;
    while (true) {
      const binary = num.toString(2);
      if (isPalindrome(binary)) {
        return binary;
      }
      num++;
    }
  }
  
  const N = 10;
  const binaryPalindromicNumber = toBinaryPalindromicNumber(N);
  console.log(binaryPalindromicNumber);