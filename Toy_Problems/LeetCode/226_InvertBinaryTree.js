/* https://leetcode.com/problems/invert-binary-tree/ */

// Recurssive solution
const invertTree = (root) => {
  if (!root) {
    return root
  };

  let tmp = root.left;
  root.left = root.right;
  root.right = tmp;

  invertTree(root.left);
  invertTree(root.right);
  return root;
}

// Breadth first solution
const invertTreeBF = (root) => {
  if (!root) {
    return null;
  }

  let queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();

    // swap
    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }
  return root;
}

// Depth First solution
const invertTreeDF = (root) => {
  if (!root) return null;

  let stack = [root];

  while (stack.length > 0) {

    const node = stack.pop();

    [node.left, node.right] = [node.right, node.left];

    if (node.left) {
      stack.push(node.left)
    };
    if (node.right) {
      stack.push(node.right)
    };
  }

  return root;
}