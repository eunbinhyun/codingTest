const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number); 
const selected = [];
let answer = "";

function dfs(depth, start) {
  if (depth === m) {
   answer += selected.join(" ") + "\n";
    return;
  }
  for (let i = start; i <= n; i++) {
    selected.push(i);
    dfs(depth + 1, i);
    selected.pop();
  }
}

dfs(0, 1);
console.log(answer);
