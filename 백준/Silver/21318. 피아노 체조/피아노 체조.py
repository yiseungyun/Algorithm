import sys  
input = sys.stdin.readline

N = int(input())
level = [0] + list(map(int, input().split()))
Q = int(input())
today = []
for _ in range(Q):
  x, y = map(int, input().split())
  today.append([x, y])
 
dp = [0 for _ in range(N+1)]
for i in range(2, N+1):
  dp[i] = dp[i-1]+1 if level[i-1] > level[i] else dp[i-1]

for x, y in today:
  print(dp[y]-dp[x])