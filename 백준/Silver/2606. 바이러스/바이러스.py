import sys
input = sys.stdin.readline

N = int(input())
M = int(input())
그래프 = [[] for _ in range(N+1)]
visited = [False for _ in range(N+1)]

for _ in range(M):
  a, b = list(map(int, input().split())) 
  그래프[a].append(b)
  그래프[b].append(a)

def dfs(node):
  global visited
  visited[node] = True
  for 인접노드 in 그래프[node]:
    if not visited[인접노드]:
      dfs(인접노드)

dfs(1)
count = 0
for i in range(1, N+1):
  if visited[i]:
    count += 1

print(count-1)