import sys
input = sys.stdin.readline 

T = int(input())
n_list = [int(input()) for _ in range(T)]

DP = [[0 for _ in range(4)] for _ in range(10**5+1)]
DP[1][1], DP[1][2], DP[1][3] = 1, 0, 0
DP[2][1], DP[2][2], DP[2][3] = 0, 1, 0
DP[3][1], DP[3][2], DP[3][3] = 1, 1, 1

for i in range(4, max(n_list)+1):
  DP[i][1] = (DP[i-1][2]+DP[i-1][3])%1000000009
  DP[i][2] = (DP[i-2][1]+DP[i-2][3])%1000000009
  DP[i][3] = (DP[i-3][1]+DP[i-3][2])%1000000009

for n in n_list:
  print((DP[n][1]+DP[n][2]+DP[n][3])%1000000009)