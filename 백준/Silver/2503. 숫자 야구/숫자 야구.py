import sys
from itertools import permutations
input = sys.stdin.readline 

N = int(input())
질문 = [list(input().split()) for _ in range(N)]

가능한_조합 = list(permutations([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))
count = 0

for a, b, c in 가능한_조합:
  flag = True

  for 답, 스트라이크, 볼 in 질문:
    답_리스트 = list(map(int, 답))
    실제_스트라이크 = 0
    실제_볼 = 0

    if 답_리스트[0] == a:
      실제_스트라이크 += 1
    elif a in 답_리스트: 
      실제_볼 += 1

    if 답_리스트[1] == b:
      실제_스트라이크 += 1
    elif b in 답_리스트: 
      실제_볼 += 1

    if 답_리스트[2] == c:
      실제_스트라이크 += 1
    elif c in 답_리스트: 
      실제_볼 += 1

    if 실제_스트라이크 != int(스트라이크) or 실제_볼 != int(볼):
      flag = False
      break

  if flag: count += 1

print(count)