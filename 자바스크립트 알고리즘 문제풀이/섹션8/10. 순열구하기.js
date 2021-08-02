  function solution(m, arr) {
    let n = arr.length;
    let answer = [];
    let check = Array.from({ length: n }, () => false);
    let tmp = Array.from({ length: m }, () => 0);
    function DFS(L) {
      if (L === m) answer.push(tmp.slice());
      else {
        for (let i = 0; i < arr.length; i++) {
          if (check[i] !== true) {
            tmp[L] = arr[i];
            check[i] = true;
            DFS(L + 1);
            check[i] = false;
          }
        }
      }
      return answer;
    }
    DFS(0);
    return answer;
  }

  console.log(solution(2, [3, 6, 9]));
