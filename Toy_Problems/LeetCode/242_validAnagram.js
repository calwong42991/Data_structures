/* https://leetcode.com/problems/valid-anagram/ */

const isAnagram = (s, t) => {
  if(s.length !== t.length){
    return false;
  }

  let reverseS = s.split('').reverse().join('');
  return reverseS === t;
}

console.log(isAnagram('anagram', 'margana'));