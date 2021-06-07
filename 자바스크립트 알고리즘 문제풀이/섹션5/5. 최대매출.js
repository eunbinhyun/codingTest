  function solution(m, arr) {
    let answer = 0, lt = 0, sum = 0;
    for (let rt = 0; rt < arr.length; rt++) {
      sum += arr[rt];
      if (rt - lt === m - 1) {
        answer = Math.max(answer, sum);
        sum -= arr[lt];
        lt++;
      }
    }
    return answer;
  }

  let arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
  console.log(solution(3, arr));
