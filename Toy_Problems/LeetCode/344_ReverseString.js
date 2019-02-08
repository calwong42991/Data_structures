/* https://leetcode.com/problems/reverse-string/ */

const reverseString = (s) => {
  let result = "";
  for(let i = s.length - 1; i >= 0; i--){
    result += s[i];
  }
  return result;
}

const reverseStringRecurrsion = (str) => {
  if(str === ""){
    return "";
  }
  return reverseStringRecurrsion(str.substring(1)) + str.charAt(0);
}

console.log(reverseString('something'));
console.log(reverseStringRecurrsion('something'));