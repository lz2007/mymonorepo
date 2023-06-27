//树 使用递归，栈

const root = {
  id: 1,
  value: 1,
  children: [
    {
      id: 2,
      value: 2,
      children: [
        {
          id: 3,
          value: 3,
          children: [
            {
              id: 4,
              value: 4,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      value: 5,
    },
  ],
};

function depTree(root) {
  if (!root) return true;
  console.log(root.value);
  if (root.children) {
    for (let i = 0; i < root.children.length; i++) {
      depTree(root.children[i]);
    }
  }
}

depTree(root);
