function solution(s) {
  let answer = ''
  let centerIdx  = parseInt(s.length / 2);
  if (s.length % 2 == 0) {
    answer = s[centerIdx- 1] + s[centerIdx];
  } else {
    answer = s[centerIdx];
  }
  return answer
}
let s = "good";
console.log(solution(s));
