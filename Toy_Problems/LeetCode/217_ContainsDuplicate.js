/* https://leetcode.com/problems/contains-duplicate/ */

const containsDuplicate = (nums) => {
  let hash = {};

  nums.forEach(element => {
    hash[element] = hash[element] ? hash[element] + 1 : 1;
  });

  return Object.values(hash).some((element) => {
    return element > 1;
  });
}

console.log(containsDuplicate([1,2,3]));