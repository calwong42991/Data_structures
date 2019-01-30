const node = (k, v) => {
  const key = k;
  const value = v || null;

  const getKey = () => key;

  const getValue = () => value;

  return {
    getKey,
    getValue
  };
};

const maxHeap = () => {
  let nodes = [];
  let heapSize = 0;

  const size = () => heapSize;

  const swap = (i, j) => {
    const temp = nodes[i];
    nodes[i] = nodes[j];
    nodes[j] = temp;
  };

  const leftIndex = parent => (parent * 2) + 1;

  const rightIndex = parent => (parent * 2) + 2;

  const parentIndex = child => Math.floor((child - 1) / 2);

  const maxChildIndex = (parent) => {
    const left = leftIndex(parent);
    const right = rightIndex(parent);
    if (left < heapSize && right < heapSize) {
      return nodes[left].getKey() > nodes[right].getKey()
        ? left : right;
    } else if (right < heapSize) {
      return right;
    } else if (left < heapSize) {
      return left;
    }
    return null;
  };

  const max = () => {
    if (heapSize > 0) {
      return nodes[0];
    }
    return null;
  };

  const bubbleLast = () => {
    let child = nodes.length - 1;
    let parent = parentIndex(child);
    while (child > 0 &&
      nodes[parent].getKey() < nodes[child].getKey()) {
      swap(child, parent);
      child = parent;
      parent = parentIndex(child);
    }
  };

  const fixRoot = () => {
    let parent = 0;
    let maxChild = maxChildIndex(parent);
    while (maxChild !== null &&
      nodes[parent].getKey() < nodes[maxChild].getKey()) {
      swap(parent, maxChild);
      parent = maxChild;
      maxChild = maxChildIndex(parent);
    }
  };

  const insert = (key, value) => {
    nodes.push(node(key, value));
    heapSize += 1;
    bubbleLast();
  };

  const extractMax = () => {
    if (heapSize > 0) {
      const m = max();
      nodes[0] = nodes[heapSize - 1];
      nodes.pop();
      heapSize -= 1;
      fixRoot();
      return m;
    }
    return null;
  };

  const clear = () => {
    nodes = [];
    heapSize = 0;
  };

  return {
    insert,
    max,
    extractMax,
    size,
    clear
  };
};

module.exports = maxHeap;