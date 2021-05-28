  function solution(str) {
    let answer = "";
    let count = 1;
    str = str + " ";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) count++;
      else {
        if (count > 1) answer += `${str[i]}${count}`;
        else answer += str[i];
        count = 1;
      }
    }
    return answer;
  }

  let str = 'KKHSSSSSSSE';
  console.log(solution(str));
