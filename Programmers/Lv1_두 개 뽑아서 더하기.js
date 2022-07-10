function solution(numbers) {
    const number = new Set();
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            number.add(numbers[i] + numbers[j])
        }
    }
    return Array.from(number).sort((a, b) => a - b);
}
