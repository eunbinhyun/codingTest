  function solution(arr) {
    let answer = Number.MIN_SAFE_INTEGER;
    let LENGTH = arr.length;
    let colSum = rowSum = 0;
    for (let i = 0; i < LENGTH; i++) {
      for (let j = 0; j < LENGTH; j++) {
        colSum += arr[i][j];
        rowSum += arr[j][i];
      }
      answer = Math.max(answer, colSum, rowSum);
      colSum = rowSum = 0;
    }

    let diagonal1 = diagonal2 = 0;
    for (let i = 0; i < LENGTH; i++) {
      diagonal1 += arr[i][i];
      diagonal2 += arr[i][LENGTH-1-i];
    }
    answer = Math.max(answer, diagonal1, diagonal2);

    return answer;
  }


  let arr = [[10, 13, 10, 12, 15],
            [12, 39, 30, 23, 11],
            [11, 25, 50, 53, 15],
            [19, 27, 29, 37, 27],
            [19, 13, 30, 13, 19]];
  console.log(solution(arr));
