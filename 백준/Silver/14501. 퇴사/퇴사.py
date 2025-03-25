import sys

N = int(sys.stdin.readline())
task = []
for _ in range(N):
    task.append(list(map(int, sys.stdin.readline().split())))

DP = [0 for _ in range(N+2)]
for i in range(N-1, -1, -1):
    if (i+task[i][0]) > N: DP[i+1] = DP[i+2]
    else: # 상담을 할 수 있는지 확인   
        DP[i+1] = max(task[i][1]+DP[i+1+task[i][0]], DP[i+2])
print(max(DP))