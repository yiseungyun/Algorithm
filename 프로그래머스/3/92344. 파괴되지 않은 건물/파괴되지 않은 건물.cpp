#include <string>
#include <vector> 

using namespace std;

/*
- N*M 크기의 행렬 모양 게임 맵. 내구도 가진 건물이 각 칸마다 하나씩.
- 적: 건물 파괴. 건물: 공격 -> 내구도 감소. 내구도 0 이하 -> 파괴. (내구도 0이하라도 공격 받으면 계속 감소)
- 아군: 건물 회복. 내구도 높임. 
- 공격과 회복 스킬: 직사각형 모양.
**return: 파괴되지 않은 건물의 수.
- skill[i]: {type(1 공격, 2 회복), r1, c1, r2, c2, degree}
- N <= 1000, M <= 1000, skill 길이 <= 2.5*10^5
- 반복문을 돌면서 값을 증가/감소 시키는 것: 10^5*10^3*10*3의 시간복잡도 = 10^11. 시간초과.
- 시간을 단축해야 함. -> 직사각형 방문을 빠르게 하는 법은?** 누적합.
- 예) [a, b, c, d, e]라는 배열에서 0~3번째 인덱스만 -2를 빼주려면? 반복문으로 가능. 그러나 누적합으로 풀이하면?
- [-2, 0, 0, 0, 2]라는 배열 생성. -> 해당 배열의 누적합 = [-2, -2, -2, -2, 0]가 됨. 
- 누적합 배열과 기존 배열을 더해주면, 원하는대로 계산이 됨. -> 이 방식도 시간 초과.
- 2차원 배열로 확장. 
*/

int solution(vector<vector<int>> board, vector<vector<int>> skill) {
    int count = 0;
    int N = board.size();
    int M = board[0].size();
    vector<vector<int>> prefix_sum(N+1, vector<int>(M+1, 0));
    
    for (int i = 0; i < skill.size(); i++) {
        int type = skill[i][0];
        int r1 = skill[i][1], c1 = skill[i][2];
        int r2 = skill[i][3], c2 = skill[i][4];
        int degree = skill[i][5];
        
        if (type == 1) degree = -degree;
        prefix_sum[r1][c1] += degree;
        prefix_sum[r2+1][c2+1] += degree;
        prefix_sum[r1][c2+1] += -degree;
        prefix_sum[r2+1][c1] += -degree;
    }
    
    // 왼 -> 오 누적합
    for (int i = 0; i < N; i++) {
        for (int j = 1; j < M; j++) {
            prefix_sum[i][j] += prefix_sum[i][j-1];
        }
    }
    
    // 위 -> 아래 누적합
    for (int j = 0; j < M; j++) {
        for (int i = 1; i < N; i++) {
            prefix_sum[i][j] += prefix_sum[i-1][j];
        }
    }
    
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (board[i][j]+prefix_sum[i][j] > 0) count++;
        }
    }
    
    return count;
}