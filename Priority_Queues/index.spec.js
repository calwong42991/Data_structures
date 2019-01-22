const pQueueFn = require('./index');

let pQueue = pQueueFn();

pQueue.enqueue(1, 1);
pQueue.enqueue(2,2);
pQueue.enqueue(3,3);
pQueue.enqueue(4,4);
pQueue.enqueue(5,5);
pQueue.enqueue(6,6);
pQueue.enqueue(7,2);
pQueue.enqueue(8, 8);
pQueue.enqueue(9, 9);
pQueue.enqueue(10, 10);

console.log(pQueue.toArray())
console.log(pQueue.isEmpty())
console.log(pQueue.front())
console.log(pQueue.back())


console.log(pQueue.dequeue())
console.log(pQueue.dequeue())
console.log(pQueue.dequeue())
console.log(pQueue.dequeue())
console.log(pQueue.dequeue())
console.log(pQueue.toArray())