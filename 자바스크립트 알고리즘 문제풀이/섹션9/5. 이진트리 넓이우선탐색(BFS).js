  function solution(arr) {
    let answer = "";
    let queue = [];

    queue.push(1);
    while (queue.length) {
      let n = queue.shift();
      answer += `${n} `;
      if (n * 2 <= 7) {
        queue.push(n * 2);
        queue.push(n * 2 + 1);
      }
    }
    return answer;
  }

  console.log(solution([1, 2, 3, 4, 5, 6, 7]));
