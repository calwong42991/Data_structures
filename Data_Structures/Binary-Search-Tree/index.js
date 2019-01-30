const node = (v, p, l, r) = () => {
  let value = v;
  let parent = p || null;
  let left = l || null;
  let right = r || null;

  const setValue = (val) => {
    value = val;
  };

  const getValue = () => value;

  const setParent = (pr) => {
    parent = pr;
  };

  const getParent = () => parent;

  const setRight = (rg) => {
    right = rg;
  };

  const getRight = () => right;

  const setLeft = (lf) => {
    left = lf;
  };

  const getLeft = () => left;

  return {
    setValue,
    getValue,
    setParent,
    getParent,
    setRight,
    getRight,
    setLeft,
    getLeft
  }
}

const binarySearchTree = () => {
  let rootNode = null;
  let nodesCount = 0;

  const root = () => rootNode;

  const count = () => nodesCount;

  const clear = () => {
    rootNode = null;
    nodesCount = 0;
  };

  const max = (startingNode) => {
    let currentNode = startingNode || rootNode;
    while (currentNode !== null && currentNode.getLeft() !== null) {
      currentNode = currentNode.getLeft();
    }
    return currentNode;
  };

  const min = (startingNode) => {
    let currentNode = startingNode || rootNode;
    while (currentNode !== null && currentNode.getRight() !== null) {
      currentNode = currentNode.getRight();
    }
    return currentNode;
  };

  const find = (value) => {
    let currentNode = rootNode;
    while (currentNode !== null) {
      if (currentNode.getValue() < value) {
        currentNode = currentNode.getRight();
      } else if (currentNode.getValue() > value) {
        currentNode = currentNode.getLeft();
      } else {
        return currentNode;
      }
    }
    return null;
  };

  const insert = (value) => {
    const insertFn = (currentNode) => {
      if (currentNode === null) {
        rootNode = node(value);
        nodesCount += 1;
      } else if (currentNode.getValue() > value) {
        if (currentNode.getLeft() === null) {
          currentNode.setLeft(node(value, currentNode));
          nodesCount += 1;
        } else {
          insertFn(currentNode.getLeft());
        }
      } else if (currentNode.getValue() < value) {
        if (currentNode.getRight() === null) {
          currentNode.setRight(node(value, currentNode));
          nodesCount += 1;
        } else {
          insertFn(currentNode.getRight());
        }
      }
    }
    insertFn(rootNode);
  };

  const remove = (value) => {
    const removeFn = (val, currentNode) => {
      if(currentNode !== null){
        let left = currentNode.getLeft();
        let right = currentNode.getRight();
        if(currentNode.getValue() < val){
          removeFn(val, right);
        } else if (currentNode.getValue() > val){
          removeFn(val, left);
        } else {
          const parent = currentNode.getParent();
          // remove a node with no children
          if(right === null && left === null){
            if(parent === null){
              rootNode = null;
            } else if( currentNode.getValue() >= parent.getValue()){
              parent.setRight(left);
            } else {
              parent.setLeft(right)
            }
            nodesCount -= 1;
          } else if( right === null){
            // remove child with a left child
            if(parent == null){
              rootNode = left;
            } else if(currentNode.getValue() > parent.getValue()){
              parent.setRight(left);
            } else {
              parent.setLeft(left);
            }
            left.setParent(parent);
            nodesCount -= 1;
          } else if( left === null){
            // remove node with a right child
            if(parent === null){
              rootNode = right;
            }else if (currentNode.getValue() > parent.getValue()){
              parent.setRight(right);
            } else {
              parent.setLeft(right);
            }
            right.setParent(parent);
            nodesCount -= 1;
          } else {
            // remove a node with two children
            const minRight = min(right);
            currentNode.setValue(minRight.getValue());
            removeFn(minRight.getValue(), minRight);
          }
        }
      }
    }
    removeFn(value, rootNode);
  };

  const traverseInOrder = (cb) => {
    const traverseInOrderFn = (currentNode) => {
      if(currentNode !== null){
        traverseInOrderFn(currentNode.getLeft());
        cb(currentNode);
        traverseInOrderFn(currentNode.getRight());
      }
    }
    traverseInOrderFn(rootNode);
  };
  
  const traversePreOrder = (cb) => {
    const traversePreOrderFn = (currentNode) => {
      if(currentNode !== null){
        cb(currentNode);
        traversePreOrderFn(currentNode.getLeft());
        traversePreOrderFn(currentNode.getRight());
      }
    }
  };

  const traversePostOrder = (cb) => {
    const traversePostOrderFn = (currentNode) => {
      if(currentNode !== null){
        traversePostOrderFn(currentNode.getLeft());
        traversePostOrderFn(currentNode.getRight());
        cb(currentNode);
      }
    }
    traversePostOrder(rootNode);
  };

  const traverse = (cb, type) => {
    switch(type){
      case 'inOrder':
        traverseInOrder(cb);
        break;
      case 'preOrder':
        traversePreOrder(cb);
        break;
      case 'postOrder':
        traversePostOrder(cb);
        break;
      default:
        traverseInOrder(cb);
    }
  };


  return {
    node,
    root,
    count,
    clear,
    max,
    min,
    find,
    insert,
    remove,
    traverseInOrder,
    traversePreOrder,
    traversePostOrder,
    traverse
  }
}

module.exports = binarySearchTree;