#include <string>
#include <vector>

using namespace std;

/*
- n명의 권투 선수가 대회 참가. 1~n 번호 받음. 1:1 방식. 
- A > B: 항상 A가 B를 이김. 
- 몇몇 경기 결과 분실. 순위 매길 수 없음.
- 선수 수: 1 <= n <= 100, 경기 결과: 1<= results <= 4500.
**return: 정확하게 순위 매길 수 있는 선수의 수. 

- 모든 경기 결과에는 모순이 없다.
- 순위를 매길 수 있다. 
    -> 모든 사람과 경기를 한 결과가 남아있음.
    -> 순위가 정해진 사람 사이에 있음.
*/

int solution(int n, vector<vector<int>> results) {
    int answer = 0;
    vector<vector<int>> graph(n+1, vector<int>(n+1, 0));
    for (auto& result:results) {
        int a = result[0];
        int b = result[1];
        
        graph[a][b] = 1;
        graph[b][a] = -1;
    }
    
    for (int k = 1; k <= n; k++) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (graph[i][k] == 1 && graph[k][j] == 1) {
                    graph[i][j] = 1;
                    graph[j][i] = -1;
                }
            }
        }
    } 
    
    for (int i = 1; i <= n; i++) {
        int win_count = 0;
        int lose_count = 0;
        for (int j = 1; j <= n; j++) {
            if (i != j) {
                if (graph[i][j] == 1) {
                    win_count++;
                } else if (graph[i][j] == -1) {
                    lose_count++;
                } else {
                    break;
                }
            }
        }
        
        if (win_count+lose_count == n-1) {
            answer++;
        }
    }
    
    
    return answer;
}