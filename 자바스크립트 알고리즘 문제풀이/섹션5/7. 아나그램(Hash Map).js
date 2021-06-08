  function solution(str1, str2) {
    let sH = new Map();
    for (let ch of str1) {
      if (sH.has(ch)) sH.set(ch, sH.get(ch) + 1);
      else sH.set(ch, 1);
    }
    for (let ch of str2) {
      if (sH.has(ch) && sH.get(ch) > 0) sH.set(ch, sH.get(ch) - 1);
      else return "NO";
    }
    return "YES";
  }

  let str1 = 'AbaAeCe';
  let str2 = 'baeeACA';
  console.log(solution(str1, str2));
