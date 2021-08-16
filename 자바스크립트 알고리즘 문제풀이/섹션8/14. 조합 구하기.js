  function solution(n, m) {
    let answer = [];
    let numbers = Array.from({ length: n }, (v, i) => i + 1);
    let tmp = Array.from({ length: m }, () => 0);
    function DFS(l, s) {
      if (l === m)
        answer.push(tmp.slice());
      else {
        for (let i = s; i <= n; i++) {
          tmp[l] = i;
          DFS(l + 1, i + 1);
        }
      }
    }
    DFS(0, 1);
    return answer;
  }

  console.log(solution(4, 2));
