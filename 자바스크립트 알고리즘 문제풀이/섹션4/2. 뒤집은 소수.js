  function primeNumber(n) {
    const sieve = Array.from({ length: n + 1 }, () => true);
    let m = Math.floor(Math.sqrt(n));
    sieve[1] = false;
    for (let i = 2; i < m + 1; i++) {
      if (sieve[i] === true) {
        for (let j = i + i; j <= n; j += i) {
          sieve[j] = false;
        }
      }
    }
    return sieve;
  }

  function solution(arr) {
    let answer = [];
    arr = arr.map(n => Number(n.toString().split('').reverse().join('')));
    const primeList = primeNumber(Math.max(...arr));

    for (let num of arr) {
      if (primeList[num]) answer.push(num);
    }
    
    return answer;
  }

  let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
  console.log(solution(arr));
