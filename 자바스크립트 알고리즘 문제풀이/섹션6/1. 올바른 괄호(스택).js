  function solution(str) {
    let answer = "YES";
    let stack = [];
    for (const bracket of str) {
      if (bracket === "(") stack.push(bracket);
      else {
        if (stack.length === 0) return "NO";
        stack.pop();
      }
    }
    if (stack.length > 0) return "NO";
    return answer;
  }

  console.log(solution('(()(()))(()'));
