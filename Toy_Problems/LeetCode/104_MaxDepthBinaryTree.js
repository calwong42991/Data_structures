/* https://leetcode.com/problems/maximum-depth-of-binary-tree/ */

const maxDepth = (root) => {
  let maxD = 0;
  const recurse = (current, depth) => {
    if (current.val === null) {
      return;
    }

    if (maxD <= depth) {
      maxD = depth;
    }

    if (current.left) {
      if(maxD <= depth){
        recurse(current.left, depth);
      } else {
        recurse(current.left, depth += 1);
      }
    }

    if (current.right) {
      if(maxD <= depth){
        recurse(current.right, depth);
      } else {
        recurse(current.right, depth += 1);
      }
    }
  }

  recurse(root, 1);
  return maxD;
}