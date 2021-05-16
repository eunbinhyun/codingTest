function solution(s) {
  let answer = ''
  let maxLength = 3;
  
  for (const string of s) {
    if (string.length > maxLength) {
      answer = string;
      maxLength = answer.length;
    }
  }
  return answer;
}
let s = ["teacher", "time", "student", "beatiful", "good"];
console.log(solution(s));
