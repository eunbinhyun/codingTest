  function solution(n, k, card) {
    let tmpSet = new Set();

    for (let i = 0; i < card.length; i++) {
      for (let j = i + 1; j < card.length; j++) {
        for (let k = j + 1; k < card.length; k++) {
          tmpSet.add(card[i] + card[j] + card[k]);
        }
      }
    }
    let answer = Array(...tmpSet).sort((a, b) => b - a)[k - 1];
    
    return answer;
  }

  let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
  console.log(solution(10, 3, arr));
