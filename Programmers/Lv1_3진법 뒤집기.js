function makeTrit(num, res) {
    if (num === 0) {
      return res;        
    }
    return makeTrit(Math.floor(num / 3), `${num % 3}${res}`);
}

function makeDecimal(num) {
    let res = 0;
    const splited = num.split('');
    for (const [i, n] of splited.entries()) {
      res += (3 ** i) * n;
    }
    return res;
}

function solution(n) {
    return makeDecimal(makeTrit(n, ''), '');
}
