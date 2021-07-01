  function solution(num, answer) {
    if (num === 1) return console.log(1);
    else {
      solution(num - 1);
      console.log(num);
    }
  }
  solution(3);
