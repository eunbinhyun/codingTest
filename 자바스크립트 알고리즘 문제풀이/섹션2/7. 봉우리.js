  function validCoordinate(coordinate, LENGTH) {
    return coordinate[0] >= 0 && coordinate[0] < LENGTH && coordinate[1] >= 0 && coordinate[1] < LENGTH;
  }

  function solution(arr) {
    let answer = 0;
    const LENGTH = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];

    for (let i = 0; i < LENGTH; i++) {
      for (let j = 0; j < LENGTH; j++) {
        let isPeak = true;
        for (let k = 0; k < 4; k++) {
          let nx = i + dx[k];
          let ny = j + dy[k];
          if (validCoordinate([nx, ny], LENGTH) && arr[nx][ny] >= arr[i][j]) {
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
