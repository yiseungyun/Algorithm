class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        n = len(grid[0])
        m = len(grid)
        visited = [[False for _ in range(n)] for _ in range(m)]
        dist = [[0, 1], [1, 0], [-1, 0], [0, -1]]
        count = 0

        def dfs(x, y):
            visited[x][y] = True
            
            for i in range(4):
                new_x = x + dist[i][0]
                new_y = y + dist[i][1]
                if new_x < 0 or new_y < 0 or new_x >= m or new_y >= n: continue
                if grid[new_x][new_y] == "0" or visited[new_x][new_y]: continue
                
                dfs(new_x, new_y)

        for i in range(m):
            for j in range(n):
                if not visited[i][j] and grid[i][j] == "1":
                    dfs(i, j)
                    count += 1

        return count