  function solution(size, arr) {
    let cache = Array.from({ length: size }, () => 0);
    for (let i = 0; i < arr.length; i++) {
      if (cache.indexOf(arr[i]) !== -1) { // 캐시 힛
        for (let j = cache.indexOf(arr[i]); j >= 1; j--) {
          cache[j] = cache[j - 1];
        }
        cache[0] = arr[i];
      }
      else { // 캐시 미스
        cache.pop();
        cache.unshift(arr[i]);
      }
    }
    return cache;
  }
  console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
