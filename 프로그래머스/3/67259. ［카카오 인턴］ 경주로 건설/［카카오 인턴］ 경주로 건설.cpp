#include <string>
#include <vector>
#include <queue>
#include <algorithm> 
using namespace std;

struct State {
    int x, y, dir, cost;
};

int solution(vector<vector<int>> board) {
    int N = board.size();
    int DP[25][25][4];
    
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            for (int d = 0; d < 4; d++) {
                DP[i][j][d] = 1e9;
            }
        }
    }

    int dx[4] = {0, 0, 1, -1}; // 우, 좌, 하, 상
    int dy[4] = {1, -1, 0, 0};
    
    queue<State> q;
    if (board[0][1] == 0) {
        q.push({0, 1, 0, 100});
        DP[0][1][0] = 100;
    }
    if (board[1][0] == 0) {
        q.push({1, 0, 2, 100});
        DP[1][0][2] = 100;
    }
    
    while (!q.empty()) {
        State curr = q.front();
        q.pop();
        
        if (DP[curr.x][curr.y][curr.dir] < curr.cost) continue;
        
        for (int i = 0; i < 4; i++) {
            int nx = curr.x+dx[i];
            int ny = curr.y+dy[i];
            
            if (nx >= 0 && ny >= 0 && nx < N && ny < N && board[nx][ny] == 0) {
                int next_cost = curr.cost+100;
                
                if (curr.dir != i) next_cost += 500;
                if(DP[nx][ny][i] >= next_cost) {
                    DP[nx][ny][i] = next_cost;
                    q.push({nx, ny, i, next_cost});
                }
            }
        }
    }
    
    int min_cost = 1e9;
    for (int i = 0; i < 4; i++) {
        min_cost = min(min_cost, DP[N-1][N-1][i]);
    }
    return min_cost;
}