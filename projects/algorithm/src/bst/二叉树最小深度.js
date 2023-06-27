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


// if(root == null) return 0;
//         //这道题递归条件里分为三种情况
//         //1.左孩子和有孩子都为空的情况，说明到达了叶子节点，直接返回1即可
//         if(root.left == null && root.right == null) return 1;
//         //2.如果左孩子和由孩子其中一个为空，那么需要返回比较大的那个孩子的深度        
//         int m1 = minDepth(root.left);
//         int m2 = minDepth(root.right);
//         //这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回m1 + m2 + 1;
//         if(root.left == null || root.right == null) return m1 + m2 + 1;
        
//         //3.最后一种情况，也就是左右孩子都不为空，返回最小深度+1即可
//         return Math.min(m1,m2) + 1; 

// 作者：房建斌学算法
// 链接：https://leetcode.cn/problems/minimum-depth-of-binary-tree/solutions/11486/li-jie-zhe-dao-ti-de-jie-shu-tiao-jian-by-user7208/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

function minDepth(root) {
  if (!root) {
    return 0;
  }

  const left = minDepth(root.left);
  const right = minDepth(root.right);

  // 这里其中一个节点为空，说明m1和m2有一个必然为0，所以可以返回m1 + m2 + 1;
  if (left == 0 && right != 0) {
    return 1 + right;
  }
  if (left != 0 && right == 0) {
    return 1 + left;
  }

  return Math.min(left, right) + 1;
}

console.log(minDepth(tree));
