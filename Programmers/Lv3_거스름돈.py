def solution(n, money):
    dp = [0] * (n + 1)
    DIVISOR = 1000000007
    
    for i in range(len(money)):
        dp[money[i]] += 1
        for j in range(money[i] + 1, len(dp)):
            dp[j] += dp[j-money[i]] 
            
    return dp[n] % DIVISOR
