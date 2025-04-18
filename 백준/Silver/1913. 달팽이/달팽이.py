import sys
input = sys.stdin.readline 

N = int(input())
위치_값 = int(input())

size = 1
step = -1
curr_x, curr_y = N//2, N//2
표 = [[0 for _ in range(N)] for _ in range(N)]
value = 1
표[curr_y][curr_x] = value

find_x, find_y = 0, 0
if value == 위치_값:
  find_x, find_y = curr_x, curr_y

while size < N: 
  for y in range(size):
    curr_y += step
    value += 1
    표[curr_y][curr_x] = value
    if value == 위치_값:
      find_x, find_y = curr_x, curr_y
  
  step *= -1

  for x in range(size):
    curr_x += step
    value += 1
    표[curr_y][curr_x] = value
    if value == 위치_값:
      find_x, find_y = curr_x, curr_y
  
  size += 1

step = -1
for y in range(size-1):
  curr_y += step
  value += 1
  표[curr_y][curr_x] = value
  if value == 위치_값:
    find_x, find_y = curr_x, curr_y

for row in 표:  
  print(' '.join(list(map(str, row))))
print(find_y+1, find_x+1)