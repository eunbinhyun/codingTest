  function solution(n) {
    function DFS(v, answer) {
      if (v === n + 1) {
        if (answer.length) console.log(answer.join(" "));
        return;
      }
      else {
        answer.push(v);
        DFS(v + 1, answer);
        answer.pop();
        DFS(v + 1, answer);
      }
    }
    DFS(1, []);
  }

  solution(3);
