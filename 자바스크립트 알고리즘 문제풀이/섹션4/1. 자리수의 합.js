  function getSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += num % 10;
      num = parseInt(num / 10);
    }
    return sum;
  }

  function solution(n, arr) {
    let answer, maxSum = Number.MIN_SAFE_INTEGER;
    for (let num of arr) {
      let sum = getSum(num);
      if (sum > maxSum || (sum === maxSum && answer < num)) {
        maxSum = sum;
        answer = num;
      }
    }
    return answer;
  }

  let arr = [128, 460, 603, 40, 521, 137, 123];
  console.log(solution(7, arr));
