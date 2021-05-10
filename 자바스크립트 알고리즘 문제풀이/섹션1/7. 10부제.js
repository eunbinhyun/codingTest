function solution(day, arr) {
  let answer = 0;

  for (let carNum of carNums) {
    if (x % 10 === day) answer++;
  }
  
  return answer;
}

let arr = [12, 20, 54, 30, 87, 91, 30];
console.log(solution(0, arr));
