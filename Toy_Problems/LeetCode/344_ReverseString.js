/* https://leetcode.com/problems/reverse-string/ */

const reverseString = (s) => {
  let result = "";
  let len = s.length - 1;
  while(len >= 0){ 
    result += s[len];
    len--;
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