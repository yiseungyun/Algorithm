import sys
import heapq
input = sys.stdin.readline 

N = int(input())
M = int(input())
버스 = [list(map(int, input().split())) for _ in range(M)]
출발, 도착 = map(int, input().split())
최단경로 = [float("inf") for _ in range(N+1)]
최단경로[출발] = 0

그래프 = [[] for _ in range(N+1)]
for start, end, cost in 버스:
  그래프[start].append([end, cost])

heap = []
heapq.heappush(heap, [0, 출발])

while len(heap) > 0:
  비용, 도시 = heapq.heappop(heap)
  if 최단경로[도시] < 비용: continue

  for 다음_도시, 다음_비용 in 그래프[도시]:
    새로운_비용 = 비용 + 다음_비용
    if 새로운_비용 < 최단경로[다음_도시]:
      최단경로[다음_도시] = 새로운_비용
      heapq.heappush(heap, [새로운_비용, 다음_도시])

print(최단경로[도착])