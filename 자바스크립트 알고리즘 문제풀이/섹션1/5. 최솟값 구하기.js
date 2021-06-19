  function solution(arr) {
    let answer = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (answer > arr[i]) answer = arr[i];
    }
    return answer;
  }
  
  let arr = [5, 7, 1, 3, 2, 9, 11];
  console.log(solution(arr));
