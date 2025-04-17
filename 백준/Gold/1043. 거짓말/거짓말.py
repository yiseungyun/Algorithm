import sys
input = sys.stdin.readline

N, M = map(int, input().split())
아는_사람 = list(map(int, input().split()))
파티_리스트 = [list(map(int, input().split())) for _ in range(M)]
visited = [False for _ in range(N+1)]

그래프 = [[] for _ in range(N+1)]

for 파티 in 파티_리스트:
  for i in range(1, len(파티)-1):
    그래프[파티[i]].append(파티[i+1])
    그래프[파티[i+1]].append(파티[i])
 
def dfs(node):
  visited[node] = True
  for 인접 in 그래프[node]:
    if not visited[인접]:
      dfs(인접)

for i in range(1, 아는_사람[0]+1):
  dfs(아는_사람[i]) 

result = 0
for 파티 in 파티_리스트:
  과장_불가 = False
  for i in range(1, len(파티)):
    if visited[파티[i]]: 
      과장_불가 = True
  if not 과장_불가: result += 1

print(result)