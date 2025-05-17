import sys
input = sys.stdin.readline 

N, M = map(int, input().split()) # N: 물건의 수, M: 가방 최대 무게
N_list = [list(map(int, input().split())) for _ in range(N)]
물건 = []

def 이진조합_만들기(무게, 만족도, 개수):
  결과 = []
  count = 1
  while 개수-count > 0:
    결과.append([count*무게, count*만족도])
    개수 -= count
    count *= 2
  결과.append([개수*무게, 개수*만족도])
  return 결과

for 무게, 만족도, 개수 in N_list:
  물건.extend(이진조합_만들기(무게, 만족도, 개수))

DP = [0 for _ in range(M+1)]

for 무게, 만족도 in 물건: 
  for j in range(M, 무게-1, -1):
    if j-무게 >= 0:
      DP[j] = max(DP[j-무게]+만족도, DP[j])

print(DP[M])