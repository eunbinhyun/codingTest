/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let lower = 0;
    let upper = nums.length - 1;
    let answer = -1;
    while (lower <= upper) {
        let mid = parseInt((lower + upper) / 2);

        if (nums[mid] === target) return mid;

        if (nums[lower] <= nums[mid]) {
            if (target > nums[mid] || target < nums[lower]) lower = mid + 1;
            else upper = mid - 1;
        }
        else {
            if (target < nums[mid] || target > nums[upper]) upper = mid - 1;
            else lower = mid + 1;
        }
    }
    return answer;
};
