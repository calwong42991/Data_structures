const hashTableFn = require('./index');

const hashTable = new hashTableFn;

console.log(hashTable.hash('something'));
hashTable.set('some', '123');
hashTable.set('thing', '123');
hashTable.set('special', '123');
hashTable.delete('special');
hashTable.get('some');
console.log(hashTable.getKeys());
