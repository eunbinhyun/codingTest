    function solution(str) {
      let sH = new Map(); // string Hash
      for (const ch of str) {
        if (sH.has(ch)) sH.set(ch, sH.get(ch) + 1);
        else sH.set(ch, 1);
      }
      let max = Number.MIN_SAFE_INTEGER;
      for (let [key, val] of sH) {
        if (max < val) {
          answer = key;
          max = val;
        }
      }
      return answer;
    }

    console.log(solution('BACBACCACCBDEDE'));
