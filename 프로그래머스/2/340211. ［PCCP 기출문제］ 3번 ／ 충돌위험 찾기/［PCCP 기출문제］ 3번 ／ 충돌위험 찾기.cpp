#include <string>
#include <vector>
#include <queue>
#include <algorithm>
#include <unordered_map>
#include <string>
using namespace std;

/*
[문제]
- 로봇 x대, 로봇마다 정해진 운송 경로 존재 -> 운송 경로는 m개 포인트로 구성
- 모든 로봇은 0초에 동시 출발, 1초마다 r/c 좌표 중 하나가 1만큼 감소 or 증가
- 다음으로 이동할 때 항상 최단 경로로 이동, 여러가지라면 r 좌표 이동 > c 좌표 이동
- 마지막 포인트 도착: 운송 마치고 물류센터 벗어남 -> 이 경로는 고려 X
**같은 좌표에 로봇 2대 이상 충돌 -> 위험 상황: 위험 상황이 총 몇 번 일어나는지?
- points: 운송 포인트 n개를 담은 배열
- routes: 로봇 x대의 운송 경로
[풀이]
- 각 로봇이 이동한 좌표를 초마다 기록
- 각 초마다 같은 위치가 있는지 확인
*/

int solution(vector<vector<int>> points, vector<vector<int>> routes) {
    int count = 0;
    int x = routes.size(); // 로봇의 수
    vector<queue<pair<int, int>>> robot_q(x);
    int max_q_size = 0;
    
    for (int i = 0; i < x; i++) { // i번째 로봇
        vector<int> current_route = routes[i]; // i번째 로봇의 경로
        int x1 = points[current_route[0]-1][0];
        int y1 = points[current_route[0]-1][1];
        robot_q[i].push({x1, y1});
        for (int j = 1; j < current_route.size(); j++) { // 경로 이동
            int x2 = points[current_route[j]-1][0];
            int y2 = points[current_route[j]-1][1];
            
            while (x2-x1 != 0) {
                if (x1 < x2) x1++;
                else x1--;
                robot_q[i].push({x1, y1});
            } 
            while (y2-y1 != 0) {
                if (y1 < y2) y1++;
                else y1--;
                robot_q[i].push({x1, y1});
            } 
        }
        max_q_size = max(max_q_size, (int)robot_q[i].size());
    }
    
    while (max_q_size--) { 
        unordered_map<string, int> m;
        for (int i = 0; i < x; i++) { // 각 로봇 
            if (robot_q[i].size() == 0) continue;
            auto [curr_x, curr_y] = robot_q[i].front();
            robot_q[i].pop();
            if (m.find(to_string(curr_x)+"_"+to_string(curr_y)) != m.end()) {
                auto m_it = m.find(to_string(curr_x)+"_"+to_string(curr_y));
                m_it->second++;
            } else {
                m.insert({to_string(curr_x)+"_"+to_string(curr_y), 1});
            }
        }
        
        for (auto it = m.begin(); it != m.end(); it++) {
            if (it->second > 1) count++;
        }
    }
    
    return count;
}