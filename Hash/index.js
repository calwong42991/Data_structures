const linkedListFn = require('../LinkedList/index');

const defaultHashTableSize = 32;

class HashTable {

  constructor(hashTableSize = defaultHashTableSize) {

    this.buckets = Array(hashTableSize).fill(null).map(() => linkedListFn());

    this.keys = {};
  }

  hash(key) {
    const hash = Array.from(key).reduce(
      (hashAccumulator, keySymbol) => (hashAccumulator + keySymbol.charCodeAt(0)),
      0,
    );

    return hash % this.buckets.length;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    this.keys[key] = keyHash;
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.traverse({
      callback: nodeValue => nodeValue.key === key
    });

    if (!node) {
      bucketLinkedList.addLast({
        key,
        value
      });
    } else {
      node.value.value = value;
    }
  }

  delete(key) {
    const keyHash = this.hash(key);
    delete this.keys[key];
    const bucketLinkedList = this.buckets[keyHash];
    const node = bucketLinkedList.traverse({
      callback: nodeValue => nodeValue.key === key
    });

    if (node) {
      return bucketLinkedList.delete(node.value);
    }

    return null;
  }

  get(key) {
    let node;
    const bucketLinkedList = this.buckets[this.hash(key)];
    bucketLinkedList.traverse({
      callback: nodeValue => {
        if(nodeValue.getValue().key === key){
          console.log('index. get --> ', nodeValue.getValue())
          node = nodeValue;
        }
      }
    });
    console.log('index . get --> ', node.getValue());
    return node.getValue().key ? node.getValue().key : undefined;
  }

  has(key) {
    return Object.hasOwnProperty.call(this.keys, key);
  }

  getKeys() {
    return Object.keys(this.keys);
  }
}

module.exports = HashTable;