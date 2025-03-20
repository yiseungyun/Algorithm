import sys
input = sys.stdin.readline

n, m = map(int, input().split())
matrix = []
case = []

for _ in range(n):
  matrix.append(list(map(int, input().split())))
for _ in range(m):
  case.append(list(map(int, input().split())))

dp = [[0 for _ in range(n)] for _ in range(n)]

for i in range(n):
  for j in range(n):
    if j-1 >= 0:
      dp[i][j] = dp[i][j-1]+matrix[i][j]
    else:
      dp[i][j] = matrix[i][j]

for i in range(n):
  for j in range(n):
    if i-1 >= 0:
      dp[i][j] = dp[i-1][j]+dp[i][j]

for x1, y1, x2, y2 in case:
  x1 -= 1; y1 -= 1; x2 -= 1; y2 -= 1
  all = dp[x2][y2]
  minus1 = dp[x1-1][y2] if x1-1 >= 0 else 0
  minus2 = dp[x2][y1-1] if y1-1 >= 0 else 0
  plus = dp[x1-1][y1-1] if x1-1 >= 0 and y1-1 >= 0 else 0
  sum = all-minus1-minus2+plus
  print(sum)
