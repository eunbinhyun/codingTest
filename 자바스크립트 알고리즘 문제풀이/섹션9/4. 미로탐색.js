  function solution(board) {
    let answer = 0;
    let n = board[0].length;
    let visited = Array.from({ length: n }, () => Array.from({ length: n }, () => false))
    let direction = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    visited[0][0] = true;

    function DFS(level, x, y) {
      if (x === n - 1 && y === n - 1) {
        return answer++;
      }
      else {
        for (const [dx, dy] of direction) {
          let nx = x + dx;
          let ny = y + dy;
          if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0 && !visited[nx][ny]) {
            visited[nx][ny] = true;
            DFS(0, nx, ny);
            visited[nx][ny] = false;
          }
        }
      }
    }
    DFS(0, 0, 0);

    return answer;
  }

  let boards = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0]]

  console.log(solution(boards));
