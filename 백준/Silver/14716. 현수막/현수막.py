import sys
from collections import deque
input = sys.stdin.readline

M, N = map(int, input().split())
현수막 = [list(map(int, input().split())) for _ in range(M)]
visited = [[False for _ in range(N)] for _ in range(M)]

글자_수 = 0

def bfs(x, y):
  dir = [[0, 1], [1, 0], [0, -1], [-1, 0], [1, 1], [1, -1], [-1, -1], [-1, 1]]
  queue = deque([[x, y]])

  while len(queue) > 0:
    curr_x, curr_y = queue.popleft()
    for dx, dy in dir:
      nx = curr_x + dx
      ny = curr_y + dy
      if nx < 0 or ny < 0 or nx >= N or ny >= M: continue
      if not visited[ny][nx] and 현수막[ny][nx] == 1:
        visited[ny][nx] = True
        queue.append([nx, ny])

for i in range(M):
  for j in range(N):
    if not visited[i][j] and 현수막[i][j] == 1:
      bfs(j, i)
      글자_수 += 1
  
print(글자_수)