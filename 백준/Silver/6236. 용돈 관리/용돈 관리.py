import sys
input = sys.stdin.readline

n, m = map(int, input().split())
day = []
for _ in range(n):
  day.append(int(input()))

left = 1
right = 10**9
result = right
while (left <= right):
  k = (left+right)//2

  count = 0
  money = 0
  for d in day:
    if money < d:
      count += 1
      money = k
    
    money -= d
  
  if count > m or max(day) > k: # 더 많이 인출
    left = k+1
  else:
    right = k-1 
    result = k

print(result)