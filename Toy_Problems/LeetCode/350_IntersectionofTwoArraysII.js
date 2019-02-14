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

const intersectSorted = (nums1, nums2) => {
  nums1.sort((a,b) => a - b)
  nums2.sort((a,b) => a - b)

  let pointer1 = 0;
  let pointer2 = 0;

  let result = [];

  while(pointer1 < nums1.length && pointer2 < nums2.length){
    if(nums1[pointer1] === nums2[pointer2]){
      result.push(nums1[pointer1]);
      pointer1++;
      pointer2++;
    } else if(nums1[pointer1] > nums2[pointer2]){
      pointer2++;
    } else {
      pointer1++;
    }
  }

  return result;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));
// console.log(intersect([4, 9, 5], [9, 4, 9, 8, 4]));
console.log(intersectSorted([1, 2, 2, 1], [2, 2]));
console.log(intersectSorted([4, 9, 5], [9, 4, 9, 8, 4]));