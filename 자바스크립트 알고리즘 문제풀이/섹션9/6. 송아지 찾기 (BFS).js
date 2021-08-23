  function solution(s, e) {
    let answer = 0;
    let queue = [];
    let visited = [];
    queue.push([s, 0]);
    while (queue.length > 0) {
      let [n, jump] = queue.shift();
      if (n === e) {
        return jump;
      }
      for (dx of [1, -1, 5]) {
        if (visited.indexOf(n + dx) === -1) {
          visited.push(n + dx);
          queue.push([n + dx, jump + 1]);
        }
      }
    }
    return answer;
  }

  console.log(solution(5, 14));
