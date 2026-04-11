#include <string>
#include <vector>
#include <algorithm>
using namespace std;

/*
- 꼭대기에서 바닥까지 이어지는 경로 중 숫자의 합이 가장 큰 경우
- 항상 큰 걸 선택한다고 해서 최적이 아님 -> 그리디 아님
- 다 해보는 경우의 수: 시간 초과날 수 있으니 메모이제이션을 통해 계산
- 이동 규칙: 아래로 이동 시 대각선 방향 한칸 오른쪽 or 왼쪽만 가능: 바로 아래 or 바로 아래 오른쪽 
- DP[i][j]: i까지 내려왔고 j를 선택했을 때 최대 합 저장
    - DP[i][j] = max(DP[i-1][j-1], DP[i-1][j]) + 현재[i][j]
    - i번째 줄까지 진행이 끝나면 바닥에 있는 것 중 합이 제일 큰 거 선택
*/

int solution(vector<vector<int>> triangle) {
    int answer = 0;
    int floor_size = triangle[triangle.size()-1].size();
    vector<vector<int>> DP(triangle.size(), vector<int>(floor_size, 0));
    DP[0][0] = triangle[0][0];
    
    for (int i = 1; i < triangle.size(); i++) {
        for (int j = 0; j < i+1; j++) {
            if (j-1 >= 0) DP[i][j] = max(DP[i-1][j-1], DP[i-1][j])+triangle[i][j];
            else DP[i][j] = DP[i-1][j]+triangle[i][j];
        }
    }
    
    for (int i = 0; i < floor_size; i++) {
        answer = max(answer, DP[triangle.size()-1][i]);
    }
    
    return answer;
}