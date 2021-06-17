  function solution(n, k) {
    let cnt = 0;
    let q = Array.from({ length: n }, (v, i) => i + 1);

    while (true) {
      let tmp = q.shift();
      if (q.length === 1) return q[0];
      if (++cnt === k) cnt = 0;
      else q.push(tmp);
    }
  }
