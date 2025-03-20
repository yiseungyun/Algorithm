import sys  
input = sys.stdin.readline

N, M = map(int, input().split())
chapter = []
for _ in range(M):
  day, page = map(int, input().split())
  chapter.append([day, page])
 
dp = [[0 for _ in range(N+1)] for _ in range(M+1)]

for index, data in enumerate(chapter):
  day, page = data
  for i in range(1, N+1):
    if i-day >= 0:
      dp[index+1][i] = max(dp[index][i], dp[index][i-day]+page)
    else: 
      dp[index+1][i] = dp[index][i]
 
print(dp[M][N])