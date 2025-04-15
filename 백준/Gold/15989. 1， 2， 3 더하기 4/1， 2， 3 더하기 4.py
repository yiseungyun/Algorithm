import sys
input = sys.stdin.readline

T = int(input())
테스트케이스 = [int(input()) for _ in range(T)]

dp = [[0]*4 for _ in range(10**4+1)]

# dp[i][1], dp[i][2], dp[i][3]
# i를 만들 때 끝이 1로 끝나는 경우, 2로 끝나는 경우, 3으로 끝나는 경우

dp[1][1] = 1
dp[2][1] = 1; dp[2][2] = 1
dp[3][1] = 1; dp[3][2] = 1; dp[3][3] = 1

for i in range(4, 10**4+1):
  dp[i][1] = dp[i-1][1]
  dp[i][2] = dp[i-2][1]+dp[i-2][2]
  dp[i][3] = dp[i-3][1]+dp[i-3][2]+dp[i-3][3]

for 정수 in 테스트케이스:
  print(dp[정수][1]+dp[정수][2]+dp[정수][3])