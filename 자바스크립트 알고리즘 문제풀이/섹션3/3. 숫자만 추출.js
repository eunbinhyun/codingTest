  function solution(s) {
    s = s.replace(/[^0-9]/g, '');
    return Number(s);
  }

  let str = 'g0en2T0s8eSoft';
  console.log(solution(str));
