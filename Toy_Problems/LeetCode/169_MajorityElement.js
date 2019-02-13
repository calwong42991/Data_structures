/* https://leetcode.com/problems/majority-element/ */

const majorityElement = (nums) => {
  let hash = {};
  let output;
  nums.forEach(element => {
    hash[element] = hash[element] ? hash[element] + 1 : hash[element] = 1;
  });

  Object.keys(hash).forEach((e) => {
    if (hash[e] > nums.length/2) {
      output = e;
    }
  })
  return output;
}

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));