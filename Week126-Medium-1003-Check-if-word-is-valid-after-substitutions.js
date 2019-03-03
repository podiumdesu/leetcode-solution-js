/**
 * @param {string} S
 * @return {boolean}
 */
// TLE
var isValid = function (S) {
  let stack = []
  const start = S[0] // the start character
  // stack.push(S[0])
  for (let i = 0, N = S.length; i < N; i++) {
    stack.push(S[i])
    if (stack[0] !== start) return false
    // if (stack.length >= 3) {
    let len = stack.length

    if (len >= 3) {
      if (stack[len - 1] === "c") {
        if (stack[len - 2] === "b") {
          if (stack[len - 3] === "a") {
            stack.pop()
            stack.pop()
            stack.pop()
          }
        }
      }
    }
    // if (stack.join("").indexOf("abc") >= 0) {

    // }
    // console.log(stack)
    // }
  }
  if (stack.length === 0) return true
  return false
};
// var isValid = function (S) {
//   let stack = []
//   const start = S[0] // the start character
//   // stack.push(S[0])
//   for (let i = 0, N = S.length; i < N; i++) {
//     stack.push(S[i])
//     if (stack[0] !== start) return false
//     // if (stack.length >= 3) {
//     if (stack.join("").indexOf("abc") >= 0) {
//       stack.pop()
//       stack.pop()
//       stack.pop()
//     }
//     // console.log(stack)
//     // }
//   }
//   if (stack.length === 0) return true
//   return false
// };
console.log(isValid("ababcc"))