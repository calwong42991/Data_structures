const node = (val, prev, nex) => {
  let value = val;
  let previous = prev;
  let next = nex;

  const setValue = (v) => {
    value = v;
  };

  const getValue = () => value;

  const setPrev = (p) => {
    previous = p
  };

  const getPrev = () => previous || null;

  const setNext = (n) => {
    next = n;
  };

  const getNext = () => next || null;

  return {
    setValue,
    getValue,
    setPrev,
    getPrev,
    setNext,
    getNext
  }
}

const doublyLinkedList = () => {
  let headNode = null;
  let tailNode = null;
  let nodesCount = 0;

  const head = () => headNode;

  const tail = () => tailNode;

  const count = () => nodesCount;

  const find = (value) => {
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        return current;
      } else {
        current = current.getNext();
      }
    }
    return current;
  };

  const addFirst = (value) => {
    let current = headNode;
    if (current === null) {
      headNode.setValue(node(value));
      tailNode = headNode;
    } else {
      let n = node(value, null, headNode);
      headNode.setPrev(n);
      headNode = n;
    }
    nodesCount += 1;
  };

  const addLast = (value) => {
    if (headNode === null) {
      headNode = node(value);
      tailNode = headNode;
    } else {
      const n = node(value, tailNode, null);
      tailNode.setNext(n);
      tailNode = n;
    }
    nodesCount += 1;
  };

  const addAfter = (value, newValue) => {
    let current = headNode;
    while (current !== null) {
      if (current.getValue() === value) {
        if (current.getNext() === null) {
          addLast(newValue);
        } else {
          const n = node(newValue, current, current.getNext());
          current.setNext(n);
          nodesCount += 1;
        }
        break;
      } else {
        current = current.getNext();
      }
    }
    if (current === null) {
      throw new Error(`node ${value} not found`)
    }
  };

  const addBefore = (value, newValue) => {
    let current = tailNode;
    while (current !== null) {
      if (current.getValue() === value) {
        if (current.getPrev() === null) {
          addFirst();
        } else {
          const n = node(newValue, current.getPrev(), current);
          current.setPrev(n);
          nodesCount += 1;
        }
        break;
      } else {
        current = current.getPrev();
      }
    }
    if (current === null) {
      throw new Error(`node ${value} not found`)
    }
  };

  const removeFirst = () => {
    if (headNode !== null) {
      if (headNode.getNext() === null) {
        headNode = null;
        tailNode = null;
      } else {
        headNode = headNode.getNext();
        headNode.setPrev(null);
      }
      nodesCount -= 1;
    }
  };

  const removeLast = () => {
    if (tailNode !== null) {
      if (tailNode.getPrev() === null) {
        headNode = null;
        tailNode = null;
      } else {
        tailNode = tailNode.getPrev();
        tailNode = setNext(null);
      }
      nodesCount -= 1;
    }
  };

  const remove = (value) => {
    let current = headNode;
    while(current !== null){
      if(current.getValue() === value){
        if(current.getPrev() === null){
          removeFirst();
        } else {
          current.getPrev().setNext(current.getNext());
          current.getNext().setPrev(current.getPrev());
          nodesCount -= 1;
        }
        break;
      } else {
        current = current.getNext();
      }
    }
  };

  const traverse = (cb) => {
    let current = headNode;
    while(current !== null){
      cb(current);
      current = current.getNext();
    }
  };

  const traverseBackward = (cb) => {
    let current = tailNode;
    while (current !== null){
      cb(current);
      current = current.getPrev();
    }
  };

  const toArray = () => {
    let arr = [];
    traverse(n => arr.push(n.getValue()));
    return arr;
  };

  const clear = () => {
    headNode = null;
    tailNode = null;
    nodesCount = 0;
  };


  return {
    node,
    head,
    tail,
    count,
    find,
    addFirst,
    addLast,
    addAfter,
    addBefore,
    removeFirst,
    removeLast,
    remove,
    traverse,
    traverseBackward,
    toArray,
    clear
  }
}

module.exports = doublyLinkedList;