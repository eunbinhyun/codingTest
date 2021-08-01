  function solution(arr, m) {
    let n = arr.length;
    let answer = Number.MAX_SAFE_INTEGER;

    function DFS(L, sum) {
      if (sum > m || L >= answer) return;
      else if (sum === m) answer = Math.min(L, answer);
      else {
        for (let i = 0; i < n; i++) {
          DFS(L + 1, sum + arr[i]);
        }
      }
    }
    DFS(0, 0);
    return answer;
  }

  console.log(solution([1, 2, 5], 15));
