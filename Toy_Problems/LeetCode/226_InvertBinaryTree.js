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

}

// Depth First solution
const invertTreeDF = (root) => {

}