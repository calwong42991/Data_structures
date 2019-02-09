/* https://leetcode.com/problems/two-sum/ */

const twoSum = (nums, target) => {
  for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
      if(nums[j] == target - nums[i]){
        nums = [i, j];
        return nums
      }
    }
  }
  return false;
}

const twoSumHash = (nums, target) => {
  let len = nums.length;
  if(len < 2) return nums;
  let hashTable = {};

  for(let i = 0; i < len; i++){
    if(hashTable[target - nums[i]]){
      return [hashTable[target - nums[i]], i];
    } else {
      hashTable[nums[i]] = i;
    }
  }
  return false;
}

let arr = [1,2,3,4,5,6,];
let target = 9;

console.log(twoSumHash(arr, target));

