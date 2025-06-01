import sys 
input = sys.stdin.readline 

N = int(input())
치즈_리스트 = list(input().split())
치즈_맵 = {}

for 치즈 in 치즈_리스트:
  if 치즈[-6:] == "Cheese":
    치즈_맵[치즈] = 1

if len(치즈_맵) >= 4: 
  print("yummy")
else:
  print("sad")