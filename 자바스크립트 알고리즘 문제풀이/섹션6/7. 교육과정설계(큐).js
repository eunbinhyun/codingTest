  function solution(need, plan) {
    let answer = "YES";
    let queue = need.split('');
    for (let subject of plan) {
      if (queue.includes(subject)) {
        if (subject !== queue.shift()) return "NO";
      }
    }
    if (queue.length > 0) return "NO";
    return answer;
  }

  console.log(solution('CBA', 'CADBGE'));
