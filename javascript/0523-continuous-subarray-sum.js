/**
 * https://leetcode.com/problems/continuous-subarray-sum/
 * Hasing
 * Time O(n) | Space O(n)
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(arr, k) {
    let sum = 0;
    const remainderMap = new Map();
    remainderMap.set(0,-1);
  
    for(let i = 0; i < arr.length;  i++) {
        sum += arr[i];
        if(remainderMap.has(sum%k)) {
            if(i - remainderMap.get(sum%k) > 1) {
                return true;
            } 
        } else {
                remainderMap.set(sum%k,i);
          }
    }
   
    return false;
  };
