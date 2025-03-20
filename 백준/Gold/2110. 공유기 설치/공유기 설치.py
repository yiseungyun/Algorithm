import sys
input = sys.stdin.readline

n, c = map(int, input().split())
house = []
for _ in range(n):
  house.append(int(input()))

house.sort()
result = 0
start = 1 # 최소 거리
end = house[-1]-house[0] # 최대 거리

# 설정한 거리로 얼만큼의 공유기를 설치할 수 있는지 계산

while start <= end:
  mid = (start+end)//2
  count = 1

  # 설치할 수 있는 공유기 체크
  curr = house[0]

  for i in range(1, n):
    if (house[i] >= curr+mid):
      count += 1
      curr = house[i]
  
  if (count >= c): # 더 거리를 늘림
    start = mid+1
    result = mid
  elif (count < c):
    end = mid-1 

print(result)