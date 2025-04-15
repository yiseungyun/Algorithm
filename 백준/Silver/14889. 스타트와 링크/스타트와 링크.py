import sys  
from itertools import combinations
input = sys.stdin.readline

N = int(input())
능력치 = [list(map(int, input().split())) for _ in range(N)]

사람 = [i for i in range(N)]
팀 = list(combinations(사람, N//2))
최소_차이 = float('inf')

for t in 팀:
  팀1 = t
  팀2 = [i for i in 사람 if i not in 팀1]
  
  팀1_능력치 = 0
  팀2_능력치 = 0
  
  for i in 팀1:
    for j in 팀1:
      if i != j:
        팀1_능력치 += 능력치[i][j]
  
  for i in 팀2:
    for j in 팀2:
      if i != j:
        팀2_능력치 += 능력치[i][j]
  
  차이 = abs(팀1_능력치 - 팀2_능력치)
  최소_차이 = min(최소_차이, 차이)

print(최소_차이)