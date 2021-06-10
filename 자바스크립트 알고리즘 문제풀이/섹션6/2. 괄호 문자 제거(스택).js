  function solution(str) {
    let stack = [];

    for (let token of str) {
      if (token === ")") {
        while (stack.pop() !== '(');
      }
      else stack.push(token);
    }
    return stack.join('');
  }

  console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
