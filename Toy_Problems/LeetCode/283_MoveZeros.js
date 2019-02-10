/* https://leetcode.com/problems/move-zeroes/ */

const moveZeroes = (nums) => {
  let pointer = 0;
  let end = nums.length;

  while(pointer < end){
    if(nums[pointer] === 0){
      console.log(pointer)
      nums.push(0);
      nums.splice(pointer, 1)
      end--;
    } else {
      pointer++;
    }
  }

  return nums;
}

let arr = [0,0, 1];

console.log(moveZeroes(arr));