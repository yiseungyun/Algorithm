import sys
from collections import deque
input = sys.stdin.readline

N, K = map(int, input().split())

queue = deque([[N, 0]])
min_time = float('inf')
time = {}
도달_시간 = [-1 for _ in range(100001)]

while len(queue) > 0:
  꺼낸_값 = queue.popleft() 
  현재_위치, 시간 = 꺼낸_값

  if min_time < 시간: continue

  if 현재_위치 == K:
    if 시간 < min_time:
      min_time = 시간 
      time[min_time] = time.get(min_time, 0) + 1
    elif 시간 == min_time:
      time[min_time] += 1 
    else:
      continue

  다음_위치_리스트 = [현재_위치+1, 현재_위치-1, 현재_위치*2] 
  for 다음_위치 in 다음_위치_리스트:
    if 다음_위치 < 0 or 다음_위치 > 100000:
      continue

    if 도달_시간[다음_위치] == -1 or 도달_시간[다음_위치] == 시간+1:
      도달_시간[다음_위치] = 시간+1
      queue.append([다음_위치, 시간+1])

print(min_time)
print(time[min_time])