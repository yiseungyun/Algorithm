import sys 
input = sys.stdin.readline

N = int(input())
village = []

for _ in range(N):
  village.append(list(map(int, input().split())))

village.sort(key=lambda x:x[0])
sumOfPerson = 0
for _, person in village:
  sumOfPerson += person

half = (sumOfPerson+1)//2
temp = 0
for i in range(N):
  temp += village[i][1] 
  if temp >= half:
    print(village[i][0])
    break
