import sys 
input = sys.stdin.readline

N = int(input())
fruits = list(map(int, input().split())) 

fruitDict = {}
fruitDict[fruits[0]] = 1

if N == 1:
  print(1)
else:
  if fruits[1] in fruitDict: fruitDict[fruits[1]] += 1
  else: fruitDict[fruits[1]] = 1

  maxResult = 1
  left = 0
  right = 1
  while left <= right and right < N:
    if len(fruitDict) <= 2:
      maxResult = max(maxResult, right-left+1)
      right += 1
      if (right < N):
        if fruits[right] in fruitDict: fruitDict[fruits[right]] += 1
        else: fruitDict[fruits[right]] = 1
    else:
      fruitDict[fruits[left]] -= 1
      if fruitDict[fruits[left]] <= 0: del fruitDict[fruits[left]]
      left += 1

  print(maxResult)