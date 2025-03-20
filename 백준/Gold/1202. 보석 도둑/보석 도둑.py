import sys
import heapq
input = sys.stdin.readline

n, k = map(int, input().split())
jewels = []
bags = []

for _ in range(n):
  m, v = map(int, input().split())
  jewels.append([m, v])

for _ in range(k):
  bags.append(int(input()))

jewels.sort(key=lambda x: x[0])
bags.sort()

result = 0
index = 0 
maxHeap = []
for bag in bags:
  while index < n and jewels[index][0] <= bag:
    heapq.heappush(maxHeap, -jewels[index][1])
    index += 1
  if len(maxHeap) != 0:
    result -= heapq.heappop(maxHeap) 

print(result)