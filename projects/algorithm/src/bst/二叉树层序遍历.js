const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};

function fTree(root, level) {
  if (!root) {
    return 0;
  }
  console.log(level,root.value)
  fTree(root.left,level+1)
  fTree(root.right,level+1)
}

fTree(tree, 0);
