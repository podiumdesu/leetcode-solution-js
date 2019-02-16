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
  console.log(arr)
  console.log(start)
  console.log(end)
  if (start < end) {
    q = Partition(arr, start, end)
    sort(arr, start, q - 1)
    sort(arr, q + 1, end)
  }
}

function QuickSort(arr) {
  const len = arr.length
  sort(arr, 0, len - 1)
  console.log(arr)
}


QuickSort([1, 10, 3, 4, 8])
QuickSort([2, 3, 55, 10, 34, 55])
QuickSort([0, 1, 2, 2, 1, 0, 0, 1])