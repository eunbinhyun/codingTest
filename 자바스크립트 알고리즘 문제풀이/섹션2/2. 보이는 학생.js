function solution(arr) {
  let answer = 1;
  let maxHeight = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (maxHeight < arr[i]) {
      answer++;
      maxHeight = arr[i];
    }
  }
  return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));
