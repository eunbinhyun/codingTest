function solution(s) {
  let answer = 0;
  for (let ch of s) {
    if (ch.charCodeAt(0) < 97) {
      answer++;
    }
  }
  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
