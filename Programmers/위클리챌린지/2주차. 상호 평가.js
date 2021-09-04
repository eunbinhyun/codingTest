function solution(scores) {
  let answer = '';
  let LENGTH = scores.length;
  for (let i = 0; i < LENGTH; i++) {
    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (let j = 0; j < LENGTH; j++) {
      sum += scores[j][i];
      if (scores[j][i] < min && i !== j) min = scores[j][i];
      if (scores[j][i] > max && i !== j) max = scores[j][i];
    }

    let avg = 0;
    if (scores[i][i] < min || scores[i][i] > max) {
      sum -= scores[i][i];
      avg = sum / (LENGTH - 1);
    }
    else avg = sum / LENGTH;

    if (avg >= 90) answer += 'A';
    else if (avg >= 80 && avg < 90) answer += 'B';
    else if (avg >= 70 && avg < 80) answer += 'C';
    else if (avg >= 50 && avg < 70) answer += 'D';
    else answer += 'F';
  }
  return answer;
}
