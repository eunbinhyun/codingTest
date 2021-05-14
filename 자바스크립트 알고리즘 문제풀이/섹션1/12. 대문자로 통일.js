function solution(s) {
  answer = []
  for (const ch of s) {
    let c = ch.charCodeAt(0)
    if (c >= 97) {
      c -= 32;
    }
    answer.push(c)
  }
  return String.fromCharCode(...answer)
}

let s = "ItisTimeToStudy";
console.log(solution(s));
