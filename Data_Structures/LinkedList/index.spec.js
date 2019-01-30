const linkedListFn = require('./index');

const linkedList = linkedListFn();

linkedList.addFirst(1)
linkedList.addFirst(2)
linkedList.addFirst(3)
linkedList.addFirst(4)
linkedList.addFirst(5)
linkedList.addFirst(6)
linkedList.addFirst(7)
linkedList.addLast(7)
linkedList.addLast(7)

console.log(linkedList.toArray())
console.log(linkedList.count());

console.log(linkedList.find(7))

