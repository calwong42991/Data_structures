/* https://leetcode.com/problems/first-unique-character-in-a-string/ */

const firstUniqChar = (s) => {
  var seen = {};
  for (i = 0; i < s.length; i++) {
    if (seen[s.charAt(i)] === undefined) {
      seen[s.charAt(i)] = 1;
    } else {
      seen[s.charAt(i)] += 1;
    }
  }
  var unique = -1;
  for (i = 0; i < s.length; i++) {
    if (seen[s.charAt(i)] === 1) {
      unique = i;
      break;
    }
  }
  return unique;
}

const firstUniqCharIndex = (s) => {
  for(let i = 0; i < s.length; i++){
    if(s.indexOf(s[i]) === s.lastIndexOf(s[i])){
      return i;
    }
  }
  return -1;
}