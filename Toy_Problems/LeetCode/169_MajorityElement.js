/* https://leetcode.com/problems/majority-element/ */

const majorityElement = (nums) => {
  let hash = {};
  let output;
  nums.forEach(element => {
    hash[element] = hash[element] ? hash[element] + 1 : hash[element] = 1;
  });

  for(let element in hash){
    if(hash[element] > (nums.length/2)){
      return element;
    }
  }

}

const majorityElementSorted = (nums) => {
  return nums.sort()[Math.floor(nums.length/2)]
}
console.log(majorityElementSorted([2, 2, 1, 1, 1, 1, 2]));