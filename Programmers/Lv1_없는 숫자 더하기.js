function solution(numbers) {
    const numberSet = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    numbers.forEach(num => numberSet.delete(num));
    return Array.from(numberSet).reduce((a, b) => a + b, 0);
}
