/* https://leetcode.com/problems/longest-substring-without-repeating-characters/description/ */

const lengthOfLongestSubstring = (s) => {

  let max = 0;
  let i = 0;
  let j = 0;
  let n = s.length;
  let map = {};

  while (i < n && j < n) {
    if (map[s[j]] === undefined) {
      map[s[j]] = 1;
      j++;
      max = Math.max(max, j - i);
    } else {
      delete map[s[i]];
      i++;
    }
  }
  return max;
}


console.log(lengthOfLongestSubstring('c'), 1);
console.log(lengthOfLongestSubstring(''), 0);
console.log(lengthOfLongestSubstring('abcabcbb'), 3);
console.log(lengthOfLongestSubstring('bbbbb'), 1);
console.log(lengthOfLongestSubstring('pwwkew'), 3);
console.log(lengthOfLongestSubstring('xhhyccrcbdczkvzeeubynglxfdedshtpobqsdhufkzgwuhaabdzrlkosnuxibrxssnkxuhcggkecshdvkcmymdqbxolbfjtzyfw'), 14);