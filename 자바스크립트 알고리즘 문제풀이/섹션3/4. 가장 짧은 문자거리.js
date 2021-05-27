  function solution(str, t) {
    let answer = [];
    let p = 1000;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === t) p = 0;
      answer.push(p++);
    }
    p = 1000;
    for (let i = str.length - 1; i >= 0; i--) {
      if (str[i] === t) p = 0;
      answer[i] = Math.min(p++, answer[i]);
    }
    return answer;
  }
