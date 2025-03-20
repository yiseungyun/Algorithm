import sys
input = sys.stdin.readline

n, m = map(int, input().split())
memory = list(map(int, input().split()))
cost = list(map(int, input().split()))

sum_of_cost = sum(cost)
dp = [[0 for _ in range(sum_of_cost+1)] for _ in range(n)] # dp[i][j] -> i번째 앱까지 봤을 때 j비용으로 확보한 메모리 크기

for j in range(cost[0], sum_of_cost+1):
  dp[0][j] = memory[0]

for i in range(1, n):
  for j in range(sum_of_cost+1):
    if j-cost[i] >= 0:
      dp[i][j] = max(dp[i-1][j], dp[i-1][j-cost[i]]+memory[i]) 
    else: 
      dp[i][j] = dp[i-1][j]

# n번째 앱에서 j비용으로 메모리를 확보한 크기를 확인하며, 만약 m과 같거나 넘는 순간이 오면 해당 비용을 return
for j in range(sum_of_cost+1):
  if dp[n-1][j] >= m:
    print(j)
    break