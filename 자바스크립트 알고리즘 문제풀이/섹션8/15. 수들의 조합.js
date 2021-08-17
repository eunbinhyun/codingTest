  function solution(k, arr, m) {
    let n = arr.length;
    let answer = 0;
    function DFS(level, startNum, sum) {
      if (level === k) {
        if (sum % m === 0) answer++;
      }
      else {
        for (let i = startNum; i < n; i++) {
          DFS(level + 1, i + 1, sum + arr[i])
        }
      }
    }
    DFS(0, 0, 0);
    return answer;
  }

  console.log(solution(3, [2, 4, 5, 8, 12], 6));
