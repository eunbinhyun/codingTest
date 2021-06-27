    function solution(arr) {
      let answer = [];
      let tmp = [...arr].sort((a, b) => a - b);
      for (let i = 0; i < arr.length; i++) {
        if (tmp[i] !== arr[i]) answer.push(i + 1);
      }
      return answer;
    }

    console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));
