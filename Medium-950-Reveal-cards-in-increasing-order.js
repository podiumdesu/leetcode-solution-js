/**
 * @param {number[]} deck
 * @return {number[]}
 */

function swap(arr, a, b) {
  let temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
  return arr
}

function Partition(arr, start, end) {
  // console.log(arr)
  // console.log(start)
  // console.log(end)
  let x = arr[end]
  let i = start - 1
  for (let j = start; j < end; j++) {
    if (arr[j] <= x) {
      i++
      arr = swap(arr, i, j)
    }
  }
  swap(arr, i + 1, end)
  return i + 1
}

function sort(arr, start, end) {
  if (start < end) {
    q = Partition(arr, start, end)
    sort(arr, start, q - 1)
    sort(arr, q + 1, end)
  }
}

function QuickSort(arr) {
  const len = arr.length
  sort(arr, 0, len - 1)
  return arr
}

var deckRevealedIncreasing = function (deck) {
  deck = QuickSort(deck)
  if (deck.length === 0 || deck === null) return deck
  const res = [deck.pop()]
  while (deck.length > 0) {
    let bottom = res.pop()
    res.unshift(bottom)
    res.unshift(deck.pop())
    // console.log(res)
  }
  return res
};
deckRevealedIncreasing([17, 13, 11, 2, 3, 5, 7])