import sys

def BFS(mat, x, y):
    mat[x][y] = 0 
    queue = [[x, y]]
    dx = [1, -1, 0, 0, 1, 1, -1, -1]
    dy = [0, 0, 1, -1, 1, -1, 1, -1]
    while queue:
        loc = queue.pop(0)
        for i in range(8):
            nx = loc[0] + dx[i]
            ny = loc[1] + dy[i]
            if nx < 0 or ny < 0 or nx >= h or ny >= w: continue
            if mat[nx][ny] == 1:
                mat[nx][ny] = 0
                queue.append([nx, ny])

w, h = map(int, sys.stdin.readline().split())
while not (w == 0 and h == 0):
    map_list = []
    for _ in range(h):
        map_list.append(list(map(int, sys.stdin.readline().split())))
    land = 0
    for i in range(h):
        for j in range(w):
            if map_list[i][j] == 1:
                BFS(map_list, i, j)
                land += 1
    print(land)
    w, h = map(int, sys.stdin.readline().split())