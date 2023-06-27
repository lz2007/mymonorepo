//树 使用队列

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

function breadthFirst(root) {
  if (!root) return true;
  const quene = [root];
  while (quene.length) {
    const node = quene.shift();
    console.log(node.value)
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        quene.push(node.children[i])
      }
    }
  }
}

breadthFirst(root);
