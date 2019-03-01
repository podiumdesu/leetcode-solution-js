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