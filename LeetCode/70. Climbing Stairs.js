const climbStairs = function(n) {
    const memo = Array.from({length: n + 1}, () => 0);
    let i = 0;
    
    while (i <= n) {
        if (i <= 2) {
            memo[i] = i++;
            continue;
        }
        memo[i] = memo[i-2] + memo[i-1];
        i++;
    }
    return memo[n];
};
