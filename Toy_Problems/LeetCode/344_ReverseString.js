/* https://leetcode.com/problems/reverse-string/ */

const reverseString = (s) => {
  let result = "";
  for(let i = s.length - 1; i >= 0; i--){
    result += s[i];
  }
  return result;
}

console.log(reverseString('something'));