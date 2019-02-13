/* https://leetcode.com/problems/valid-anagram/ */

const isAnagram = (s, t) => {
  if(s.length !== t.length){
    return false;
  }

  let hashS = {};
  let hashT = {};

  s.split('').map(e => {
    hashS[e] ? hashS[e] += 1 : hashS[e] = 1;
  })

  t.split('').map(e => {
    hashT[e] ? hashT[e] += 1 : hashT[e] = 1;
  })

  console.log(hashS);
  console.log(hashT);
  
  let keys = Object.keys(hashS);
  for(let i = 0; i < keys.length; i++){
    if(hashS[keys[i]] !== hashT[keys[i]]){
      return false;
    }
  }
  return true;
}

console.log(isAnagram('anagram', 'nagaram'));