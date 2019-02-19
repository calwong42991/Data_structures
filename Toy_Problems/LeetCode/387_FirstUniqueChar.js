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
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return i;
    }
  }
  return -1;
}

var firstUniqCharMap = (s) => {
  var map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2);
    } else {
      map.set(s[i], 1);
    }
  }

  for (i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};