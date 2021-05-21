  function solution(arr) {
    const grade = Array.from({ length: arr.length }, () => 1);

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] < arr[j]) grade[i]++;
      }
    }
    return grade;
  }
