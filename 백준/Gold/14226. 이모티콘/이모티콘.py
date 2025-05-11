import sys 
from collections import deque
input = sys.stdin.readline

S = int(input())

time = 0
queue = deque([[1, 0, 0]]) # [화면 이모티콘 수, 클립보드 수, 시간]
visited = [[False for _ in range(1001)] for _ in range(1001)]
visited[1][0] = True # visited[화면][클립보드]

while len(queue) > 0:
  screen, clipboard, time = queue.popleft()

  if screen == S:
    print(time)
    break

  if not visited[screen][screen]:
    visited[screen][screen] = True # 복사
    queue.append([screen, screen, time+1])

  if clipboard > 0 and screen + clipboard <= 1000 and not visited[screen+clipboard][clipboard]:
    visited[screen+clipboard][clipboard] = True
    queue.append([screen+clipboard, clipboard, time+1])
  
  if screen-1 >= 0 and not visited[screen-1][clipboard]:
    visited[screen-1][clipboard] = True
    queue.append([screen-1, clipboard, time+1])
