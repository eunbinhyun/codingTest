  function solution(n, arr) {
    let dp = Array.from({ length: n }, () => 0);
    let answer = 0;
    for (let i = 0; i < arr.length; i++) {
      dp[i] = 1;
      for (let j = i - 1; j >= 0; j--) {
        if (arr[i] > arr[j] && dp[i] <= dp[j]) dp[i] = dp[j] + 1;
      }
      answer = Math.max(answer, dp[i]);
    }
    return answer;
  }
