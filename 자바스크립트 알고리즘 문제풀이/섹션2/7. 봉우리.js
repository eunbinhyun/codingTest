  function validCoordinate(coordinate) {
    return coordinate[0] >= 0 && coordinate[0] < arr.length && coordinate[1] >= 0 && coordinate[1] < arr.length;
  }

  function solution(arr) {
    let answer = 0;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        let isPeak = true;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (validCoordinate([nx, ny]) && arr[nx][ny] >= arr[i][j]) {
            isPeak = false;
            break;
          }
        }
        if (isPeak) answer++;
      }
    }
    return answer;
  }

  let arr = [[5, 3, 7, 2, 3],
            [3, 7, 1, 6, 1],
            [7, 2, 5, 3, 4],
            [4, 3, 6, 4, 1],
            [8, 7, 3, 5, 2]];
  console.log(solution(arr));
