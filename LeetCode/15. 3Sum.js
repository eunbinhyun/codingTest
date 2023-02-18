/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    const answer = [];
    nums = nums.sort((a, b) => a - b);
    for (let i=0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        let l = i + 1;
        let r = nums.length-1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            }
            else if (sum < 0) {
                l++;
            }
            else {
                answer.push([nums[i], nums[l], nums[r]]);
                l++;
                while (l < r && nums[l] === nums[l-1]) {
                    l++;
                }
            }
        }
    }
    return answer;
};
