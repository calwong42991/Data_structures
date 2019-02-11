/* https://leetcode.com/problems/intersection-of-two-arrays/ */

const intersection = (num1, num2) => {
  let hash = {};
  let num = [];
  
  if (num1.length === 0 || num2.length === 0) {
    return num;
  }

  for (let i = 0; i < num1.length - 1; i++) {
    if (!hash[num1[i]]) {
      hash[num1[i]] = true;
    }
  }

  for (let j = 0; j < num2.length - 1; j++) {
    if (hash[num2[j]] && num.indexOf(num2[j]) < 0) {
      num.push(num2[j]);
    }
  }

  return num;
}

let arr1 = [4, 9, 5];
let arr2 = [9, 4, 9, 8, 4];

console.log(intersection(arr1, arr2));