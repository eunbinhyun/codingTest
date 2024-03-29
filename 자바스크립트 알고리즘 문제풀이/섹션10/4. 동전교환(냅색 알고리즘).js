  function solution(coin, m) {
    let answer = 0;
    let dy = Array.from({ length: m + 1 }, () => 1000);
    dy[0] = 0;
    for (let i = 0; i < coin.length; i++) {
      for (let j = coin[i]; j <= m; j++) {
        dy[j] = Math.min(dy[j - coin[i]] + 1, dy[j]);
      }
    }
    return dy[m];
  }

  console.log(solution([1, 2, 5], 15));
