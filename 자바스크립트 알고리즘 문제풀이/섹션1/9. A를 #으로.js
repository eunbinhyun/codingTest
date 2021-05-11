function solution(s) {
  let answer = "";
  for (let ch of s) {
    if (ch === 'A') answer += '#';
    else answer += ch;
  }
  return answer;
}

let str = "BANANA";
console.log(solution(str));
