  function solution(product, money) {
    let answer = 0;
    let n = product.length;
    product.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));

    for (let i = 0; i < n; i++) {
      let leftMoney = money - (product[i][0] / 2 + product[i][1]);
      let cnt = 1;
      for (let j = 0; j < n; j++) {
        if (j !== i && product[j][0] + product[j][1] > leftMoney) break;
        if (j !== i && product[j][0] + product[j][1] <= leftMoney) {
          leftMoney -= product[j][0] + product[j][1];
          cnt++;
        }
      }
      answer = Math.max(cnt, answer);
    }
    return answer;
  }

  console.log(solution([[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]], 28));
