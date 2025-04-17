import sys
input = sys.stdin.readline

N = int(input())
메뉴 = [input().rstrip() for _ in range(N)]

단축키 = {}
알파벳 = [0 for _ in range(26)]

for 옵션 in 메뉴:
  단축키_지정 = False
  단어_리스트 = 옵션.split(" ")
  count = 0

  for i, 단어 in enumerate(단어_리스트):
    a = 단어[0].upper()
    if not 알파벳[ord(a)-65]:
      단축키[옵션] = count
      알파벳[ord(a)-65] = 1
      단축키_지정 = True
      break

    count += len(단어)+1

  if not 단축키_지정:
    for i, s in enumerate(옵션):
      a = s.upper() if ord(s) >= 65 else -1
      if a == -1: continue
      if not 알파벳[ord(a)-65]:
        단축키[옵션] = i
        알파벳[ord(a)-65] = 1
        단축키_지정 = True
        break

  if not 단축키_지정:
    단축키[옵션] = -1

for 옵션 in 메뉴:
  index = 단축키[옵션]
  if index != -1:
    print(옵션[0:index], end="")
    print("[" + 옵션[index] + "]", end="")
    print(옵션[index+1:])
  else:
    print(옵션)