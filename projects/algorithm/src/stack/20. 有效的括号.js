// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 每个右括号都有一个对应的相同类型的左括号。

// 来源：力扣（LeetCode）
// 链接：https://leetcode.cn/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 *
 * @param {*} s String
 */
function isValid1(s) {
  const len = s.length;
  for (let i = 0; i < len; i++) {
    s = s.replace("()", "").replace("{}", "").replace("[]", "");
  }
  return s.length == 0;
}

function isValid(s) {
   const stack = []
   for (let i = 0; i < s.length; i++) {
      if (s[i] == "(" || s[i] == "{" || s[i] == "[") {
         stack.push(s[i])
      }
      
      if (s[i] == ")" || s[i] == "}" || s[i] == "]") {
         stack.pop();
      }
   }

   return stack.length === 0
 }
 
console.log(isValid('()[]{}'))
console.log(isValid('([{})'))
console.log(isValid('(({}))'))