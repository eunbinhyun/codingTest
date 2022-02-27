function solution(a, b) {
  return a.reduce((sum, value, i) => sum + a[i] * b[i], 0);
}
