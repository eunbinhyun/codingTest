  function solution(n, m, arr) {
    let answer = 0, left = 0, sum = 0;
    for (let right = 0; right < arr.length; right++) {
      sum += arr[right];
      if (sum === m) answer++;
      while (sum >= m) {
        sum -= arr[left++];
        if (sum === m) answer++;
      }
    }
    return answer;
  }

  let arr = [1, 2, 1, 3, 1, 1, 1, 2];
  console.log(solution(8, 6, arr));
