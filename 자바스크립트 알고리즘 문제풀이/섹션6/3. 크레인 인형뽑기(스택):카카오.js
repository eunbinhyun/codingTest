  function solution(board, moves) {
    let stack = [];
    let answer = 0;

    moves.forEach(pos => {
      for (let i = 0; i < board.length; i++) {
        if (board[i][pos-1] !== 0) {
          if (stack[stack.length-1] === board[i][pos-1]) {
            stack.pop();
            answer += 2;
          }
          else stack.push(board[i][pos-1]);
          board[i][pos-1] = 0;
          break;
        }
      }
    });
    return answer;
  }
