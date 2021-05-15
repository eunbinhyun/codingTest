  function solution(s) {
      answer = ''
      for (const ch of s) {
        if (ch !== ch.toUpperCase()) {
          answer += ch.toUpperCase();
        } else {
          answer += ch.toLowerCase()
        }
      }
      console.log(answer)
    }

    let s = "StuDY";
    console.log(solution(s));
