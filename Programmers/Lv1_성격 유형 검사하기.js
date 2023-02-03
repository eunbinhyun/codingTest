function solution(survey, choices) {
  const score = {
    A: 0,
    N: 0,
    C: 0,
    F: 0,
    M: 0,
    J: 0,
    R: 0,
    T: 0,
  };
  for (let i=0; i < survey.length; i++) {
    const [type1, type2] = survey[i].split('');
    const choice = choices[i];
    score[choice < 4 ? type1 : type2] += Math.abs(choice - 4);  
  }
  let answer = "";
  for (const category of [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]]) {
    const [type1, type2] = category;
    answer += score[type1] < score[type2] ? type2 : type1;
  }
  return answer;
}
