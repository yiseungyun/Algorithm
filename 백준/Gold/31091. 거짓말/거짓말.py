import sys 
input = sys.stdin.readline 

N = int(input())

사람들 = list(map(int, input().split()))
이상 = [0 for _ in range(N+1)]
이하 = [0 for _ in range(N+1)]
거짓말 = []

for 사람 in 사람들:
  if 사람 >= 0:
    이상[사람] += 1
  if 사람 <= 0:
    이하[-사람] += 1

이상_누적합 = [0 for _ in range(N+1)]
이하_누적합 = [0 for _ in range(N+1)]

이상_누적합[N] = 이상[N]
for i in range(N-1, -1, -1):
  이상_누적합[i] = 이상_누적합[i+1]+이상[i]

이하_누적합[0] = 이하[0]
for i in range(1, N+1):
  이하_누적합[i] = 이하_누적합[i-1]+이하[i]

if 이상_누적합[1] == 0:
  거짓말.append(0)

for i in range(1, N):
  if 이상_누적합[i+1]+이하_누적합[i-1] == i:
    거짓말.append(i)

if 이하_누적합[N-1] == N:
  거짓말.append(N)

print(len(거짓말))
print(*거짓말)
