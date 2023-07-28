// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。

// 排序 + 双指针
// 本题的难点在于如何去除重复解。

// 算法流程：
// 特判，对于数组长度 nnn，如果数组为 nullnullnull 或者数组长度小于 333，返回 [][][]。
// 对数组进行排序。
// 遍历排序后数组：
// 若 nums[i]>0nums[i]>0nums[i]>0：因为已经排序好，所以后面不可能有三个数加和等于 000，直接返回结果。
// 对于重复元素：跳过，避免出现重复解
// 令左指针 L=i+1L=i+1L=i+1，右指针 R=n−1R=n-1R=n−1，当 L<RL<RL<R 时，执行循环：
// 当 nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0nums[i]+nums[L]+nums[R]==0，执行循环，判断左界和右界是否和下一位置重复，去除重复解。并同时将 L,RL,RL,R 移到下一位置，寻找新的解
// 若和大于 000，说明 nums[R]nums[R]nums[R] 太大，RRR 左移
// 若和小于 000，说明 nums[L]nums[L]nums[L] 太小，LLL 右移

// 作者：吴彦祖
// 链接：https://leetcode.cn/problems/3sum/solutions/39722/pai-xu-shuang-zhi-zhen-zhu-xing-jie-shi-python3-by/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const len = nums.length;

  let left = 0;
  let right = 1;

  // 将数组元素排序
  nums.sort((a, b) => {
    return a - b;
  });   

  while (left != len) {
    const sum = nums[left] + nums[right];
    const hasVal = sum ? -sum : sum;
    let jlen = right + 1;
    while (jlen < len) {
      if (nums[jlen] == hasVal) {
        res.push([nums[left], nums[right], hasVal]);
      }
      jlen++;
    }
    if (right > len) {
      left += 1;
      right = left + 1;
    } else {
      right++;
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
