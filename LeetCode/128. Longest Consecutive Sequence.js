/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
    let answer = 0;
    const numSet = new Set(nums);

    if (nums.length === 0) return 0;
    for (const num of numSet) {
        if (numSet.has(num - 1)) continue;
        let increase = 1;
        let count = 1;
        while (numSet.has(num + increase)) {
            numSet.has(num + increase);
            increase++;
            count++;
        }
        answer = Math.max(count, answer);
    }
    return answer;
};
