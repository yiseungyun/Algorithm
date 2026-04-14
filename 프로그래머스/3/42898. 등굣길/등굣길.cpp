#include <string>
#include <vector>
#include <queue>
#include <tuple>
#include <climits>  
using namespace std;

/*
[문제]
- 집에서 학교까지 가는 길 m*n의 격자 모양으로 나타낼 수 있음
- 집 (1, 1), 학교 (m, n); 1 <= m, n <= 100
- 물이 잠긴 지역의 좌표를 담은 puddles가 주어짐: 물에 잠긴 지역은 0개 이상 10개 이하
- 오른쪽, 아래쪽으로만 움직임 -> return: 학교까지 갈 수 있는 최단경로의 개수 % MAX
[풀이]
- 오른쪽, 아래쪽으로 움직이며 이동함 -> 학교 나오고 최단 거리 저장
- 최종 최단 거리로 이동한 경로 개수 % MAX return 
- 그냥 풀면 시간 초과 발생함
- 현재 위치 (i, j)로 올 수 있는 최단경로는? 이를 다 저장해두어야 함
- dp[i][j] = dp[i-1][j] + dp[i][j-1]
*/

int solution(int m, int n, vector<vector<int>> puddles) { 
    vector<vector<int>> map(n, vector<int>(m, 0)); 
    vector<vector<int>> dp(n, vector<int>(m, 0)); 
    for (auto puddle: puddles) {
        int x = puddle[1];
        int y = puddle[0];
        map[x-1][y-1] = 1;
    }
    
    dp[0][0] = 1;
    
    for (int i = 1; i < m; i++) {
        if (map[0][i] == 0) {
            dp[0][i] = (dp[0][i-1])%1000000007;
        } else {
            break;
        }
    }
    
    for (int i = 1; i < n; i++) {
        if (map[i][0] == 0) {
            dp[i][0] = (dp[i-1][0])%1000000007;
        } else {
            break;
        }
    }
    
    for (int i = 1; i < n; i++) {
        for (int j = 1; j < m; j++) {
            if (map[i][j] == 0) {
                dp[i][j] = (dp[i-1][j]+dp[i][j-1])%1000000007;
            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    return dp[n-1][m-1]%1000000007;
}