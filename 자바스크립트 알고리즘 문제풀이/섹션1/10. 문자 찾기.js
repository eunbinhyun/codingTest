function solution(s, t) {
  let answer = 0;
  for (let ch of s) {
    if (ch === t) answer++;
  }
  return answer;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, 'R'));
