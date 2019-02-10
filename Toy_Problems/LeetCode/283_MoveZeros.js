/* https://leetcode.com/problems/move-zeroes/ */

const moveZeroes = (nums) => {
  let pointer = 0;
  let end = nums.length;

  while(pointer < end){
    if(nums[pointer] === 0){
      nums.push(0);
      nums.splice(pointer, 1)
    }
    pointer += 1;
  }

  return nums;
}

let arr = [0, 1, 0, 3, 12];

console.log(moveZeroes(arr));