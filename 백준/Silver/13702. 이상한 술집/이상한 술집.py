import sys
input = sys.stdin.readline

N, K = map(int, input().split())
막걸리 = [int(input()) for _ in range(N)]

left = 0
right = 2**31-1
result = 0

while left <= right:
  막걸리양 = (left+right)//2
  먹는_사람 = 0
  for i in 막걸리:
    먹는_사람 += i//막걸리양
  
  if 먹는_사람 >= K: 
    left = 막걸리양+1
    result = max(result, 막걸리양)
  else:
    right = 막걸리양-1

print(result)