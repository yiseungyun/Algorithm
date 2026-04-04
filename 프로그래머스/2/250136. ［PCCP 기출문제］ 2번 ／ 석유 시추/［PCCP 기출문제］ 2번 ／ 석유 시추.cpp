#include <string>
#include <vector>
#include <queue>
#include <unordered_set>
using namespace std;

int solution(vector<vector<int>> land) { 
    int n = land.size();
    int m = land[0].size();
    vector<vector<int>> 방문(n, vector<int>(m, 0));
    vector<int> 석유_양(m, 0); 
    
    int dx[4] = {1, -1, 0, 0};
    int dy[4] = {0, 0, 1, -1};
    queue<pair<int, int>> 다음_방문_큐;
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            if (land[i][j] == 1 && 방문[i][j] == 0) {
                다음_방문_큐.push({i, j});
                방문[i][j] = 1;
                int 크기 = 0;
                unordered_set<int> 방문_열;
                

                while (다음_방문_큐.size() > 0) {
                    pair<int, int> curr = 다음_방문_큐.front();
                    다음_방문_큐.pop();
                    int x = curr.first, y = curr.second;
                    크기 += 1;
                    방문_열.insert(y);

                    for (int d = 0; d < 4; d++) {
                        int nx = x+dx[d];
                        int ny = y+dy[d];

                        if (nx < n && nx >= 0 && ny < m && ny >= 0) {
                            if (land[nx][ny] == 1 && 방문[nx][ny] == 0) {
                                다음_방문_큐.push({nx, ny});
                                방문[nx][ny] = 1;
                            }
                        }
                    }
                }
                
                for (int 열: 방문_열) {
                    석유_양[열] += 크기;
                }
            }
        }
    }
    
    int 가장_많은_석유 = 0; 
    for (int i = 0; i < m; i++) {
        if (가장_많은_석유 < 석유_양[i]) { 
            가장_많은_석유 = 석유_양[i];
        }
    }
    
    return 가장_많은_석유; 
}