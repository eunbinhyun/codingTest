 function solution(n, m, arr) {
      let adj = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => 0));
      let visited = Array.from({ length: n + 1 }, () => 0);

      arr.forEach(([col, row]) => {
        adj[col][row] = 1;
      })
      let answer = 0;

      function DFS(level, num) {
        if (num === n) {
          return answer++;
        }
        else {
          for (let i = 1; i <= n; i++) {
            if (adj[num][i] === 1 && !visited[i]) {
              visited[i] = true;
              DFS(level + 1, i);
              visited[i] = false;
            }
          }
        }
      }
      visited[1] = true;
      DFS(0, 1)
      return answer;
    }

    let n = 5;
    let m = 9;
    let arr = [
      [1, 2], [1, 3], [1, 4],
      [2, 1], [2, 3], [2, 5],
      [3, 4],
      [4, 2], [4, 5]];

    console.log(solution(n, m, arr));
