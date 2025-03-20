import sys 
import heapq
input = sys.stdin.readline

N = int(input())
heap = []

for _ in range(N):
  number = int(input())
  if number == 0:
    if len(heap) > 0:
      num, flag = heapq.heappop(heap)
      print(num*flag)
    else:
      print(0)
  else:
    heapq.heappush(heap, [abs(number), 1 if number > 0 else -1])