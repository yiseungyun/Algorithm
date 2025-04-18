import sys
import heapq
input = sys.stdin.readline 

V, E = map(int, input().split())
start = int(input())
간선_정보 =[list(map(int, input().split())) for _ in range(E)]
그래프 = [[] for _ in range(V+1)]
visited = [False for _ in range(V+1)]

for a, b, w in 간선_정보:
  그래프[a].append([b, w])

distance = [float('inf') for _ in range(V+1)]
queue = []
heapq.heappush(queue, [0, start])
distance[start] = 0

while len(queue) > 0:
  dist, node = heapq.heappop(queue) # 큐에서 시작 - node까지 짧은 거리를 꺼냄
  if visited[node]: continue
  visited[node] = True

  for b, w in 그래프[node]: # node의 인접 노드 확인
    새로운_거리 = w + distance[node]
    if 새로운_거리 < distance[b]:
      distance[b] = 새로운_거리
      heapq.heappush(queue, [새로운_거리, b])

for i in range(1, V+1):
  if distance[i] == float('inf'):
    print("INF")
  else: print(distance[i])