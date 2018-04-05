/**
 * @param {string} moves
 * @return {boolean}
 */

 // Dirty
//  const keys = new Map([
//   ['U', 1],
//   ['D', -1],
//   ['R', 100],
//   ['L', -100],
// ])

// var judgeCircle = function(moves) {
//   return !moves.split('')
//               .map( i=> keys.get(i))
//               .reduce( (num, cur) => num += cur, 0)
// }


// Version 2
 var judgeCircle = function(moves) {
  let res = moves.split('')
      .reduce((record, cur) => 
                              {record[cur]++; return record}, 
                               { 'U': 0, 'D': 0, 'R': 0, 'L': 0 })
  return ((res.U === res.D) && (res.R === res.L))
}

console.log(judgeCircle('UD'))