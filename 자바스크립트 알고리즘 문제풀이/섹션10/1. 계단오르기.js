  function solution(stairs) {
    let dp = Array.from({ length: stairs + 1 }, () => 0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= stairs; i++) {
      dp[i] = dp[i - 2] + dp[i - 1];
    }
    return dp[stairs];
  }

  console.log(solution(7));
