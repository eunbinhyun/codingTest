/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lower = 0;
    let upper = nums.length - 1;
    let answer = nums[0];
    while (lower <= upper) {
        if (nums[lower] < nums[upper]) {
            answer = Math.min(answer, nums[lower]);
            break;
        }
        let mid = parseInt((lower + upper ) / 2);
        answer = Math.min(nums[mid], answer);
        if (nums[0] <= nums[mid]) {
            lower = mid + 1;
        }
        else {
            upper = mid - 1;
        }
    }
    return answer;
};
