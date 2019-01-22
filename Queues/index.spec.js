const queueFn = require('./index');

let queue = queueFn();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);

console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.toArray());
console.log(queue.front());
console.log(queue.back());

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.toArray());


