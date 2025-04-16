import sys
import math
input = sys.stdin.readline

N = int(input())
달력 = [list(map(int, input().split())) for _ in range(N)]

for m, n, x, y in 달력:
  limit = m*n//math.gcd(m, n)
  count = 0
  found = False
  k = x

  while k <= limit:
    current_y = k%n
    if current_y == 0:
      current_y = n
    if current_y == y: 
      found = True
      print(k)
      break
      
    k += m
  if not found:
    print(-1)