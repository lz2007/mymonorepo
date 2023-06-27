const tree = {
  value: 1,
  left: {
    value: 2,
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: {
        value: 6,
        left: {
          value: 6,
          left: {
            value: 6,
            left: {
              value: 6,
            },
            right: {
              value: 7,
            },
          },
          right: {
            value: 7,
          },
        },
        right: {
          value: 7,
        },
      },
      right: {
        value: 7,
      },
    },
    right: {
      value: 7,
    },
  },
};

function maxDep(root, max) {
  const maxNums = [];
  function inderT(root, max) {
    if (!root) return max;
    maxNums.push(max);
    // console.log(max);
    return inderT(root.left, max + 1) && inderT(root.right, max + 1);
  }
  inderT(root, max);
  return Math.max(...maxNums);
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

// console.log(maxDep(tree, 1));
console.log(maxDepth(tree));
