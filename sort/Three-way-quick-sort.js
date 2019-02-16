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
  let i = start - 1,
    j = start - 1,
    k = start - 1
  for (let z = start; z < end; z++) {
    if (arr[z] < x) {
      j++, k++, i++
      arr = swap(arr, j, z)
      arr = swap(arr, i, j)
    } else if (arr[z] === x) {
      j++, k++
      arr = swap(arr, j, z)
    } else {
      k++
      arr = swap(arr, k, z)
    }

  }
  k++, j++
  console.log(k, end)
  swap(arr, k, j)
  d = {
    start: start,
    mid: i + 1,
    end: j + 1,
  }
  console.log(d.start, d.mid, d.end)
  return {
    start: start,
    mid: i + 1,
    end: j + 1,
  }

  // return i + 1 // 返回 mid 和 num
}

function sort(arr, start, end) {
  console.log(arr)
  console.log(start)
  console.log(end)
  if (start < end) {
    q = Partition(arr, start, end)
    sort(arr, start, q.mid - 1)
    sort(arr, q.end, end)
  }
}

function ThreeWayQuickSort(arr) {
  const len = arr.length
  sort(arr, 0, len - 1)
  console.log(arr)
}


// ThreeWayQuickSort([1, 10, 3, 4, 8])
// ThreeWayQuickSort([2, 3, 55, 10, 34, 55])
// ThreeWayQuickSort([0, 1, 2, 2, 1, 0, 0, 1])
ThreeWayQuickSort(
  [2, 0, 2, 1, 1, 0])