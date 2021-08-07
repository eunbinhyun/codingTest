function solution(n, f) {
  let answer = [];
  let memo = Array.from(Array(n), () => Array(n).fill(0));
  let pascal = Array.from({ length: n }, () => 0);

  function combination(n, r) {
    if (memo[n][r] > 0) return memo[n][r];
    else if (n === r || r === 0) return 1;
    else return memo[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
  }

  for (let i = 0; i < n; i++) {
    pascal[i] = combination(n - 1, i);
  }

  let visited = Array.from({ length: n + 1 }, () => false);
  let permu = Array.from({ length: n }, () => 0);

  function permutation(L, num) {
    if (L === n) {
      let sum = 0;
      for (let i = 0; i < pascal.length; i++) {
        sum += pascal[i] * permu[i];
      }
      if (sum === f) answer = permu;
    }
    else {
      for (let i = 1; i <= n; i++) {
        if (visited[i] === false) {
          permu[L] = i;
          visited[i] = true;
          permutation(L + 1, i + 1);
          visited[i] = false;
          if (answer.length === n) return answer;
        }
      }
    }
  }
  permutation(0, 1);
  return answer;
}

console.log(solution(4, 16));
