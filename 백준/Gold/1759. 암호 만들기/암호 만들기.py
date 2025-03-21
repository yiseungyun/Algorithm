import sys

L, C = map(int, sys.stdin.readline().split())
string = list(sys.stdin.readline().split())
string.sort()
global vowel 
vowel = 0 

def DFS(): 
    global vowel
    if L == len(result) and vowel > 0 and vowel <= L-2:
        code.append(result[:])
        return
    for i in range(C):
        if len(result) == 0:
            if string[i] == 'a' or string[i] == 'e' or string[i] == 'i' or string[i] == 'o' or string[i] == 'u':
                if string[i] not in result:
                    vowel += 1
                    result.append(string[i])
                    DFS()
                    vowel -= 1
                    result.pop()
            else:
                if string[i] not in result:
                    result.append(string[i])
                    DFS()
                    result.pop()
        else:
            if result[-1] < string[i]:
                if string[i] == 'a' or string[i] == 'e' or string[i] == 'i' or string[i] == 'o' or string[i] == 'u':
                    if string[i] not in result:
                        vowel += 1
                        result.append(string[i])
                        DFS()
                        vowel -= 1
                        result.pop()
                else:
                    if string[i] not in result:
                        result.append(string[i])
                        DFS()
                        result.pop()
result = []
code = []
DFS()
for c in code:
    print(*c, sep="")