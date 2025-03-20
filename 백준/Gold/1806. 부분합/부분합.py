import sys 
input = sys.stdin.readline

N, S = map(int, input().split())
sequence = list(map(int, input().split())) 

left = 0
right = 1
length = float("inf")
sumOfSeq = sequence[0]
currLength = 1

while left <= right and right <= N: 
  if sumOfSeq >= S:
    length = min(length, currLength)
    sumOfSeq -= sequence[left]
    left += 1
    currLength -= 1
  else:
    currLength += 1
    if right < N:
      sumOfSeq += sequence[right]
    right += 1

print(length if length != float("inf") else 0)