class Solution:
    def climbStairs(self, n: int) -> int: 
        DP = [0 for _ in range(n)]
        DP[0] = 1
        if n >= 2: DP[1] = 2
        for i in range(2, n):
            DP[i] = DP[i-1]+DP[i-2]
        return DP[n-1]