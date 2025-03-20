import sys  
input = sys.stdin.readline

N = int(input())
flowers = []
for _ in range(N):
  sm, sd, em, ed = map(int, input().split())
  flowers.append([sm, sd, em, ed])

month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

def findDays(m, d):
  result = 0
  for i in range(1, m):
    result += month[i]
  return result+d

flowers.sort(key=lambda x:(x[0], x[1], x[2], x[3]))
index = 0
count = 0

end = findDays(3, 1)
last_day = findDays(11, 30)

while index < N:
  candidate = []
  for i in range(index, N):
    sm, sd, em, ed = flowers[i]
    s = findDays(sm, sd)
    e = findDays(em, ed)
    if s <= end and end <= e:
      candidate.append([s, e])
    elif end < s:
      break
  candidate.sort(key=lambda x:-x[1]) 
  index += len(candidate)
  if len(candidate) == 0: 
    count = 0
    break
  start, end = candidate[0]
  count += 1
  if end > last_day: break

if last_day < end:
  print(count)
else:
  print(0)
