import sys
input = sys.stdin.readline

K = int(input())

chocolate = 1 
while chocolate < K:
  chocolate *= 2

cut = 0
size = 0

binary_k = list(bin(K)[2:])
for i in range(len(binary_k)-1, -1, -1):
  if binary_k[i] == '1':
    size = 2**(len(binary_k)-1-i)
    break

temp = chocolate
while size < temp:
  temp //= 2
  cut += 1

print(chocolate, cut if chocolate != K else 0)