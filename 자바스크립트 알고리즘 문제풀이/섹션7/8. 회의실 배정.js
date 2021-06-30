  function solution(meetings) {
    let answer = 0;
    meetings.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return a[1] - b[1];
    })
    let endTime = 0;
    meetings.forEach(meeting => {
      if (endTime <= meeting[0]) {
        answer++;
        endTime = meeting[1];
      };
    });
    return answer;
  }

  console.log(solution([[1, 4], [2, 3], [3, 5], [4, 6], [5, 7]]));
  console.log(solution([[3, 3], [1, 3], [2, 3]]));
