import sys
import heapq
input = sys.stdin.readline 

N, M = map(int, input().split())

선물상자 = list(map(int, input().split()))
아이들 = list(map(int, input().split()))

result = 1

최대_힙 = []
for 선물 in 선물상자:
  heapq.heappush(최대_힙, -선물)

for 아이 in 아이들:
  선물 = -heapq.heappop(최대_힙)
  if 선물 >= 아이:
    if 선물-아이 > 0:
      heapq.heappush(최대_힙, -(선물-아이))
  else:
    result = 0
    break

print(result)