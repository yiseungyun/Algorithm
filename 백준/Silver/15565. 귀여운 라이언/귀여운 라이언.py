import sys
input = sys.stdin.readline

N, K = map(int, input().split())
인형 = list(map(int, input().split()))

result = 10**6+1
left, right = 0, 0 
count = 1 if 인형[0] == 1 else 0

while left <= right and right < N:
  if count < K: 
    right += 1
    if right < N and 인형[right] == 1:
      count += 1
  else: 
    result = min(result, right-left+1)
    if 인형[left] == 1: count -= 1
    left += 1

if result == 10**6+1: print(-1)
else: print(result)