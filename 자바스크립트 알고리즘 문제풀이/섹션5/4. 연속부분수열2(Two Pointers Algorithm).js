  function solution(n, m, arr) {
    let answer = 0, lt = 0, rt = 0, sum = 0;
    while (rt < arr.length) {
      sum += arr[rt];
      if (sum <= m) {
        answer++;
        rt++;
      }

      if (sum >= m) {
        lt++;
        rt = lt;
        sum = 0;
      }
    }
    return answer;
  }

  let arr = [1, 3, 1, 2, 3];
  console.log(solution(5, 5, arr));
