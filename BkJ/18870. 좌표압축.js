const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const sortedArr = Array.from(new Set(arr)).sort((a, b) => a - b);
const map = new Map();
for (let i = 0; i < sortedArr.length; i++) {
  map.set(sortedArr[i], i);
}
for (let i = 0; i < arr.length; i++) {
  arr[i] = map.get(arr[i]);
}
console.log(arr.join(" "));
