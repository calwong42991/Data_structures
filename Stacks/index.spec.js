const stackFn = require('./index');

const stack = stackFn();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);
stack.push(8);
stack.push(9);
stack.push(10);

console.log(stack.size()) //10
console.log(stack.pop()) // 10
console.log(stack.size()) // 9
console.log(stack.peek()); // 9

console.log('------------------')
console.log(stack.pop()) // 9
console.log(stack.size()) //8
console.log(stack.print()) // 

console.log('------------------')
console.log(stack.pop())
console.log(stack.size())
console.log(stack.print())

console.log('------------------')
console.log(stack.pop())
console.log(stack.size())
console.log(stack.print())

console.log('------------------')
console.log(stack.pop())
console.log(stack.size())
console.log(stack.print())

console.log('------------------')
console.log(stack.pop())
console.log(stack.size())
console.log(stack.print())