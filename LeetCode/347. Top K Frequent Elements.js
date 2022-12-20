/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const key = nums[i].toString();
        hash[key] = hash[key] ? hash[key] + 1 : 1;
    }
   return Object.entries(hash).sort((a, b) => b[1] - a[1]).map(v => Number(v[0])).splice(0, k);
};
