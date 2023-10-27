const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m]= input[0].split(" "); // 3 1
const selected = [];
const visited = [];
let answer = "";

const recursive = (a, depth) => {
  if (depth >= m) {
    answer += `${selected.join(" ")}\n`;
    return;
  }
  for (let i = 1; i <= n; i++) {
    if (visited[i]) continue;
    visited[i] = true
    selected.push(i);
    recursive(i, depth + 1);
    selected.pop(i);
    visited[i] = false;
  }
}

recursive(1, 0);
console.log(answer);
