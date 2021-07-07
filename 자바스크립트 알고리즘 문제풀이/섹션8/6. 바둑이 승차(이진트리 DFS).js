  function solution(arr, weight) {
    let answer = Number.MIN_SAFE_INTEGER;
    let LENGTH = arr.length;

    function DFS(L, sum) {
      if (sum > weight) return;
      if (L === LENGTH) {
        answer = Math.max(answer, sum);
        return answer;
      }
      else {
        DFS(L + 1, sum + arr[L]);
        DFS(L + 1, sum);
      }
    }
    DFS(0, 0);
    return answer
  }

  console.log(solution([81, 58, 42, 33, 61], 259));
