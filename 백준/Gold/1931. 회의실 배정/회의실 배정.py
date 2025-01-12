import sys

N = int(sys.stdin.readline())
meeting = []
for _ in range(N):
    a, b = map(int, sys.stdin.readline().split())
    meeting.append([a, b])
meeting.sort(key = lambda x:(x[1], x[0]))
end = meeting[0][1]
count = 1
for i in range(1, N):
    if meeting[i][0] >= end:
        count += 1
        end = meeting[i][1]
print(count)