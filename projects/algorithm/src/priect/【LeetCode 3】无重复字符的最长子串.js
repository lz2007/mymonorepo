// 输入: "abcabcbb"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  var res = 0;
  var map = {};
  for (let left = 0, right = 0; right < s.length; right++) {
    const chat = s[right];

    if (map[chat]>=0 && map[chat] >= left) {
        left = map[chat] + 1
    }

    res = Math.max(res, right - left + 1);
    map[chat] = right;
  }
  return res;
};

console.log(lengthOfLongestSubstring('abcabcbb'))
