const PascalTriangle = (num) => {
  let output = [];

  output.push([1]);

  let start = 1;

  if (num === 0) {
    return output[0];
  }

  while (start < num) {
    let newArr = new Array(start + 1).fill(1);
    let copyArr = [...output[start - 1]];

    for (let i = 1; i < newArr.length - 1; i++) {
      newArr[i] = copyArr[i - 1] + copyArr[i];
    }

    output.push(newArr);
    start += 1;
  }
  return output;
}

console.log(PascalTriangle(1));
console.log(PascalTriangle(2));
console.log(PascalTriangle(3));
console.log(PascalTriangle(4));
console.log(PascalTriangle(5));
console.log(PascalTriangle(6));