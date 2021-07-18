  function solution(arr) {
    let answer = 0;
    let timeTable = [];
    for (const time of arr) {
      timeTable.push([time[0], 'S']);
      timeTable.push([time[1], 'E']);
    }
    timeTable = timeTable.sort((a, b) => {
      if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
      else return a[0] - b[0];
    });

    let people = 0;
    for (const time of timeTable) {
      if (time[1] === "S") people++;
      else people--;
      answer = Math.max(answer, people);
    }
    return answer;
  }

  console.log(solution([[14, 18], [12, 15], [15, 20], [20, 30], [5, 14]]));
