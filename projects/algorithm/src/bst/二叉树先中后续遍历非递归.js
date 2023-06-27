// 二叉树的先序,中序,后序遍历
//    A
// B     C

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

// 先序 A B C
function f(root) {
  const stack = [root];
  let current = root;

  while (stack.length) {
    if (!current) {
      return;
    }
    const node = stack.pop();
    console.log(node.value);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
}
// console.log(f(tree)); //1234567
// 中序 B A C
// 把全部左节点入栈，遇到右节点重新遍历
function m(root) {
  const stack = [];
  let current = root;
  while (current || stack.length) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop();
    console.log(node.value);
    current = node.right;
  }
}
console.log(m(tree)); // 4251637
// 后序 B C A
function l(tree) {}
// console.log(l(tree)); // 4526731
