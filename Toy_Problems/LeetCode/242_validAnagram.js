/* https://leetcode.com/problems/valid-anagram/ */

const isAnagram = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }

  let hash = {};

  s.split('').map(e => {
    hash[e] = hash[e] ? hash[e] + 1 : 1;
  })

  t.split('').map(e => {
    hash[e] = hash[e] ? hash[e] - 1 : -1;
  })

  return Object.keys(hash).every(k => hash[k] === 0);
}

console.log(isAnagram('anagram', 'nagaram'));