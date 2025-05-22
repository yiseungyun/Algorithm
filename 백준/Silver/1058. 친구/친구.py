import sys
input = sys.stdin.readline 

N = int(input())
친구관계 = [input().rstrip() for _ in range(N)]
그래프 = [[] for _ in range(N)]
최대친구수 = 0

for i in range(N-1):
  for j in range(i+1, N):
    if 친구관계[i][j] == 'Y':
      그래프[i].append(j)
      그래프[j].append(i)

for 사람 in range(N):
  친구집합 = set() 
  for 친구 in 그래프[사람]:
    친구집합.add(친구)
    for 친구의친구 in 그래프[친구]:
      if 친구의친구 != 사람:
        친구집합.add(친구의친구)
  최대친구수 = max(최대친구수, len(친구집합))

print(최대친구수)