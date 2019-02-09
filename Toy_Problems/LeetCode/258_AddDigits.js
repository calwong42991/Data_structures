/* https://leetcode.com/problems/add-digits/ */

const addDigits = (num) => {
  // check if num is a number else return not a number
  if(Number.isNaN(num)){ return `Not a number`};

  // recursive function 
    // check if num is > 10 or return number
    // split and add togther then pass it into recursive function

  const recursiveFn = (n) => {
    if(n <= 10){
      return n;
    }
    let number = n.toString().split('').map( n =>  Number(n)).reduce((acc, curr) => {
      return acc + curr;
    })
    return recursiveFn(number);
  }

  return recursiveFn(num);

}

console.log(addDigits(38));
