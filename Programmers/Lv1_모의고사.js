function checkAnswer(person, answers) {
  let count = 0;
  let i = 0;
  for (let j=0; j < answers.length; j++) {
      if (answers[j] === person[i]) count++;
      i++;
      if (i >= person.length) i = 0;
  }
  return count;    
}

function solution(answers) {
  const answer = [];
  const person1 = [1, 2, 3, 4, 5];
  const person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const count = [0, 0, 0];

  let i = 0;
  for (const person of [person1, person2, person3]) {
      count[i] = checkAnswer(person, answers);
      i++;
  }
  const maxNum = Math.max(...count);
  for (let i=0; i < count.length; i++) {
      if (count[i] === maxNum) answer.push(i + 1);
  }
  return answer;
}
