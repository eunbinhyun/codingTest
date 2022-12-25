/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = function(height) {
    let l = 0;
    let r = height.length - 1;
    let answer = 0;
    while (l < r) {
        const vertical = Math.min(height[l], height[r]);
        answer = Math.max(vertical * (r - l), answer);
        if (height[l] < height[r]) l++;
        else r--;
    }
    return answer;
};
