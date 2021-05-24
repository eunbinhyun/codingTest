  function solution(str) {
    let answer = 'NO';
    let lowerStr = str.toLowerCase();
    if (lowerStr === lowerStr.split("").reverse().join("")) answer = 'YES';
    return answer;
  }

  let str = 'gooG';
  console.log(solution(str));
