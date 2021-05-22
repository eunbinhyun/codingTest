  function solution(s) {
      answer = '';
      let len = parseInt(s.length / 2);
      for (let i = len; i >= 0 ; i--) {
        let word = s.substr(0, i)
        let splitArr = s.split(word)
        if (splitArr.filter(v => v === "").length === splitArr.length) answer = word;
        break;
      }
   return answer;
   }
  let s = 'ksetkset';
  console.log(solution(s))
