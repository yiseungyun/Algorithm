import sys
from collections import deque
input = sys.stdin.readline 

N = int(input())
M = int(input())

그래프 = [[] for _ in range(N+1)]

for _ in range(M):
  a, b = map(int, input().split())
  그래프[a].append(b)
  그래프[b].append(a)

visited = [False for _ in range(N+1)]
visited[1] = True
count = 0

queue = deque([[1, 0]])

while len(queue) > 0:
  node, depth = queue.popleft() 
  if depth == 1 or depth == 2: count += 1
  for next_node in 그래프[node]:
    if not visited[next_node]:
      queue.append([next_node, depth+1])
      visited[next_node] = True

print(count)