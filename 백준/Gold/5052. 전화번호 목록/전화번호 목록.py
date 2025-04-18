import sys
input = sys.stdin.readline

T = int(input())
result = []

for _ in range(T):
  n = int(input())
  전화번호 = []
  for _ in range(n):
    전화번호.append(input().rstrip()) 

  전화번호.sort(key=lambda x: len(x))
  전화번호부 = {}
  일관성 = True
  for 번호 in 전화번호:
    for end in range(1, len(번호)):
      if 번호[0:end] in 전화번호부:
        일관성 = False
        break
    전화번호부[번호] = 1
  
  if 일관성:
    result.append("YES")
  else:
    result.append("NO")

for r in result:
  print(r)