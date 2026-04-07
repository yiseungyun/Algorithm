#include <string>
#include <vector>
#include <queue>
#include <tuple>
using namespace std;

/*
- 장애물을 볼때까지 계속 같은 방향으로 나아감
- 장애물에 부딪혀 멈추게 되었을 때 목표 지점이면 이동 거리 반환, 갈 수 없다면 -1 반환
- 계속 이동하려면? 장애물 만나기 전에는 같은 방향으로만 가야함 -> 같은 방향 어떻게?
*/

int solution(vector<string> board) {
    int dx[4] = {1, -1, 0, 0};
    int dy[4] = {0, 0, 1, -1};
    queue<tuple<int, int, int>> q;
    pair<int, int> start;
    pair<int, int> goal;
    vector<vector<int>> visited(board.size(), vector<int>(board[0].size()));
    
    for (int row = 0; row < board.size(); row++) {
        for (int col = 0; col < board[0].size(); col++) {
            if (board[row][col] == 'R') start = {row, col};
        }
    }
    
    // 큐에 멈춘 위치만 저장
    q.push(make_tuple(start.first, start.second, 0));
    visited[start.first][start.second] = 1;
    
    while (q.size() > 0) {
        auto [x, y, count] = q.front();
        q.pop();
        
        if (board[x][y] == 'G') return count;
        
        for (int i = 0; i < 4; i++) {
            int nx = x+dx[i];
            int ny = y+dy[i];
            
            // 가장자리 or 장애물이 아니면 그냥 계속 이동
            while (nx >= 0 && ny >= 0 && nx < board.size() && ny < board[0].size() 
                   && board[nx][ny] != 'D') {
                nx = nx+dx[i]; ny = ny+dy[i];
            }
            
            nx = nx-dx[i]; ny = ny-dy[i];
            if (visited[nx][ny] == 1) {
                continue;
            }
            visited[nx][ny] = 1;
            q.push(make_tuple(nx, ny, count+1));
        }
    }
    
    return -1;
}