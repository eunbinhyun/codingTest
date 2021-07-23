  function solution(arr, m) {
    arr.sort((a, b) => a - b);
    let lower = 0, upper = arr.length - 1;
    let mid;

    while (lower <= upper) {
      mid = parseInt((lower + upper) / 2);
      if (arr[mid] === m) return mid + 1;
      else if (arr[mid] > m) upper = mid - 1;
      else lower = mid + 1;
    }
  }

  console.log(solution([23, 87, 65, 12, 57, 32, 99, 81], 32));
