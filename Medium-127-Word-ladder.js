/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

// 我想了好久，到底这么建图呢？结果还是自己太天真了。。。
// BFS

function changeWord(string, index, newWord) {
  if (string) {
    string = string.split("")
    string[index] = newWord
    return string.join("")
  }
}
var ladderLength = function (beginWord, endWord, wordList) {
  wordList = new Set(wordList)
  if (beginWord == endWord) return 1
  if (wordList.has(beginWord)) wordList.delete(beginWord)
  if (!wordList.has(endWord)) return 0
  let list = [{
    word: beginWord,
    depth: 1
  }]
  const alphabet = "abcdefghijklmnopqrstuvwxyz"


  let pathLength = 0
  let done = 0
  while (list.length > 0) { // BFS
    for (let i = 0; i < beginWord.length; i++) {
      let temp = list[0].word // 取出处理单词

      for (let j = 0; j < 26; j++) {

        // temp[i] = alphabet[j] // 替换一个字母
        temp = changeWord(temp, i, alphabet[j])
        console.log(temp)
        if ((temp == endWord) && wordList.has(temp)) {
          console.log("结束了")
          console.log(list[0].word + list[0].depth)
          // list = []
          done = 1

          if (temp == list[0].word) {
            console.log("gg")
            return list[0].depth
          }
          return (list[0].depth + 1)
        } // 如果找到了
        if ((temp !== list[0].word) && wordList.has(temp)) {

          list.push({
            word: temp,
            depth: list[0].depth + 1
          })
          wordList.delete(temp)
        }
      }
      if (done) break
    }
    list.shift()
  }
  return pathLength
};

c = ladderLength("cog", "cog", ["hot", "dot", "dog", "cog", "lot", "log"])
// c = ladderLength("a", "c", ["a", "b", "c"])
console.log(c)