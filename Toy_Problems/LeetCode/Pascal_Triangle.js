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

const PascalTriangleAlt = (num) => {
  if(Number.isNaN(num) || num < 0){
    return null;
  }
  
  let pascalTriangles = [];
  let start = 0;

  while(start <= num){
    let currentLine = [1];
    let currentLineSize = start + 1;

    for(let i = 1; i < currentLineSize; i++){
      currentLine[i] = currentLine[i - 1] * (start - i + 1)/ i;
    }

    pascalTriangles.push(currentLine);
    start++;
  } 

  return pascalTriangles;
}

console.log(PascalTriangleAlt(6));
