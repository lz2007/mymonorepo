// 二叉搜索树(Binary Search Tree)

// 1. 定义
// 二叉搜索树(BST)又叫二叉查找树，二叉排序树。二叉搜索树就是一棵二叉树，但是它又具有搜索树的特征：

// 节点的左子树只包含 小于 当前节点的数。
// 节点的右子树只包含 大于 当前节点的数。
// 所有左子树和右子树自身必须也是二叉搜索树。

// 每个结点都比它的左结点大，比右结点小。
// 每个结点的左右子树都是一课二叉搜索树。
// 对一棵二叉搜索树进行中序遍历结果是从小到大排序的结果。

const root1 = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 3,
  },
};

const root = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 4,
    left: {
        value: 3,
      },
      right: {
        value: 6,
      },
  },
};

function isBst(tree) {
  function inderT(root, min, max) {
    if (!root) return true;
    if (min != null && min.value >= root.value) {
      return false;
    }
    if (max != null && max.value <= root.value) {
      return false;
    }
    return inderT(root.left, root, max) && inderT(root.right, min, root);
  }
  return inderT(tree, null, null);
}

console.log(isBst(root));
