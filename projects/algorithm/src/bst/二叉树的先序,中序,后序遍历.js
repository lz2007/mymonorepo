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
function f(tree) {
  if (!tree.value) return;
  console.log(tree.value);
  if (tree.left) f(tree.left);
  if (tree.right) f(tree.right);
}
// console.log(f(tree)); //1234567
// 中序 B A C
function m(tree) {
  tree.left && m(tree.left);
  console.log(tree.value);
  tree.right && m(tree.right);
}
// console.log(m(tree));// 4251637
// 后序 B C A
function l(tree) {
  tree.left && l(tree.left);
  tree.right && l(tree.right);
  console.log(tree.value);
}
// console.log(l(tree)); // 4526731
