  function solution(arr) {
    let n = arr[0].length;
    let m = arr.length;
    let answer = 0;
    for (let i = 1; i <= n; i++) { 
      for (let j = 1; j <= n; j++) {
        let cnt = 0;
        let pi = pj = 0;
        for (let k = 0; k < m; k++) {
          for (let l = 0; l < n; l++) {
            if (arr[k][l] === i) pi = l;
            else if (arr[k][l] === j) pj = l;
          }
          if (pi < pj) cnt++;
        }
        if (cnt === m) answer++;
      }
    }
    return answer;
  }

  console.log(solution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]));
