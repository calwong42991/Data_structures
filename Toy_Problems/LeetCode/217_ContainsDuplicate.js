/* https://leetcode.com/problems/contains-duplicate/ */

const containsDuplicate = (nums) => {
  // let hash = {};

  // nums.forEach(element => {
  //   hash[element] = hash[element] ? hash[element] + 1 : 1;
  // });

  // for(let key in hash){
  //   if(hash[key] > 1){
  //     return true;
  //   }
  // }
  // return false;


  let hash = {};

  for(let elm of nums){
    if(hash[elm]){
      return hash[elm];
    }else {
      hash[elm] = true;
    }
  }
  return false
}

console.log(containsDuplicate([1,2,3, 1]));