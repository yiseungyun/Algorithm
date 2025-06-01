import sys 
input = sys.stdin.readline 

N, M = map(int, (input().split()))
색칠 = [list(map(int, input().split())) for _ in range(M)]
공 = [0 for _ in range(N)]
count = 1

for l, r in 색칠:
  for i in range(l-1, r):
    공[i] = count
  count += 1

num_dict = {}
for i in 공:
  if i != 0:
    num_dict[i] = 1

print(2**len(num_dict))