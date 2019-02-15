/* https://leetcode.com/problems/excel-sheet-column-title/ */

let dict = ['0', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

const convertToTitle = (n) => {
  if (n < 27) {
    return dict[n];
  } else {
    let temp = Math.ceil(n / 26) - 1;
    return convertToTitle(temp) + convertToTitle(n - temp * 26);
  }
}

const convertToTitleAlt = (n) => {
  let res = "";
  let codeA = "A".charCodeAt();
  while( n > 0){
    n--;
    res = String.fromCharCode(codeA + n % 26) + res;
    n = parseInt(n / 26);
  }
  return res;
}

console.log(convertToTitle(100))
console.log(convertToTitleAlt(100))