import sys
input = sys.stdin.readline 

N = int(input())
M = int(input())
VIP = [int(input()) for _ in range(M)]
VIP.sort()

DP = [0 for _ in range(N+1)]
DP[0] = 1
DP[1] = 1

for i in range(2, N+1):
  DP[i] = DP[i-1] + DP[i-2]

prev = 0
result = 1
for i in VIP:
  result *= DP[i-prev-1]
  prev = i

result *= DP[N-prev]
print(result)