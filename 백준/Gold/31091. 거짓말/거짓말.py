import sys
input = sys.stdin.readline 

N = int(input())
K = list(map(int, input().split()))
 
U = [0 for _ in range(N+1)]
L = [0 for _ in range(N+1)]

for k in K:
  if k >= 0:
    U[k] += 1
  if k <= 0: 
    L[-k] += 1

# 누적합 배열
US = [0 for _ in range(N+1)]
LS = [0 for _ in range(N+1)] 

LS[0] = 0
for i in range(1, N+1):
  LS[i] = LS[i-1] + L[i-1]

US[N] = 0
for i in range(N-1, -1, -1):
  US[i] = US[i+1] + U[i+1] 
  
result = []
for k in range(0, N+1):
  if US[k]+LS[k] == k:
    result.append(k)

print(len(result))
print(*result)