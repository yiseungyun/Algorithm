import sys 
input = sys.stdin.readline

N = int(input())
array = list(map(int, input().split())) 

array.sort() 
result = [array[-3], array[-2], array[-1]]

for index, point in enumerate(array):
  left = 0 if index != 0 else 1
  right = N-1 if index != N-1 else N-2
  while left < right and right < N:
    current = array[left]+array[right]+point  
    if abs(current-0) < abs(sum(result)-0):
      result = [array[left], array[right], point]
    if current > 0:
      right -= 1
      if index == right: right -= 1
    elif current < 0:
      left += 1
      if index == left: left += 1
    else:
      break

result.sort()
print(' '.join(map(str, result)))