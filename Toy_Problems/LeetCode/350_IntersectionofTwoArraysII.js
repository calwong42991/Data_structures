/* https://leetcode.com/problems/intersection-of-two-arrays-ii/ */

const intersect = (nums1, nums2) => {

  let hash = {};
  let output = [];

  for (let elm1 of nums1) {
    hash[elm1] = hash[elm1] ? hash[elm1] + 1 : 1;
  }

  for (let elm2 of nums2) {
    if (hash[elm2]) {
      output.push(elm2);
      hash[elm2]--;
    }
  }

  return output;

}

console.log(intersect([1, 2, 2, 1], [2, 2]));
console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));