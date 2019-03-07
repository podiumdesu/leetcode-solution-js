/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
// 计算复数

var complexNumberMultiply = function (a, b) {
  // a + bi
  const aSplit = a.split(/[+i]/)
  const aReal = aSplit[0]
  const aImg = aSplit[1]
  const bSplit = b.split(/[+i]/)
  const bReal = bSplit[0]
  const bImg = bSplit[1]
  let real = aReal * bReal - aImg * bImg
  let img = aReal * bImg + bReal * aImg
  let res = "".concat(real).concat("+").concat(img).concat("i")
  return res
};

complexNumberMultiply("1+1i", "1+1i")