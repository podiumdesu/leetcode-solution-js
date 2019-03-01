/**
 * @param {number[][]} rooms
 * @return {boolean}
 */


var canVisitAllRooms = function (rooms) {
  let roomNums = rooms.length
  let res = new Array(roomNums).fill(0)
  res[0] = 1
  let roomKeys = rooms[0] // find from room 0
  while (roomKeys.length > 0) {
    currentKeyToRoom = roomKeys.shift() // get the key
    if (!res[currentKeyToRoom]) {
      console.log("come to " + currentKeyToRoom)
      res[currentKeyToRoom] = 1
      roomKeys = roomKeys.concat(rooms[currentKeyToRoom])
    }
    console.log("现在拥有" + roomKeys)
  }
  if (res.join("").indexOf("0") >= 0) return -1
  return 1
};

function traversal(rooms, res, AllRoom) {
  for (let i = 0, N = rooms.length; i < N; i++) {
    // console.log("i = " + i)
    // console.log(rooms)
    if (!res[rooms[i]]) {
      res[rooms[i]] = 1
      // console.log("现在访问了房间" + rooms[i])

      traversal(AllRoom[rooms[i]], res, AllRoom)
    }
  }
}
var canVisitAllRooms = function (rooms) {
  let N = rooms.length
  let res = new Array(N).fill(0)
  res[0] = 1
  traversal(rooms[0], res, rooms)
  // console.log(res)
  if (res.join("").indexOf("0") >= 0) return -1
  return 1
}
console.log(canVisitAllRooms([
  [1, 3],
  [3, 0, 1],
  [2],
  [0]
]))

console.log(canVisitAllRooms([
  [1],
  [2],
  [3],
  []
]))