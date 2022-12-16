const twoSum = function(nums, target) {
    const LENGTH = nums.length;
    const hash = {};
    for (let i = 0; i < LENGTH; i++) {
        const secondNum = target - nums[i];
        if (hash[secondNum] !== undefined) {
            return [hash[secondNum], i];
        }
        hash[nums[i]] = i;
    }
};
