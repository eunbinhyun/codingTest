function solution(nums) {
    const kinds = [...new Set(nums)];
    return Math.min(kinds.length, parseInt(nums.length / 2));
}
