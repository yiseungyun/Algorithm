#include <string>
#include <vector>
#include <algorithm>
using namespace std;

/*
[문제]
- 고속도로를 이동하는 모든 차량이 단속 카메라를 한 번은 만나도록 설치해야 함
- 차량의 경로가 routes로 주어짐 -> 모든 차량이 카메라를 한 번은 만나도록 설치하려면 "최소" 몇 대가 필요?
- routes[i]: [a, b] -> i번째 차량이 a 지점에서 진입하고 b 지점에서 빠져나감
- 1 <= 차량 대수 <= 10000, -30000 <= 진입, 진출 지점 <= 30000

[풀이]
- 출구 지점 기준 오름차순으로 정렬함** 핵심 포인트
- 카메라를 하나 설치해두고, 첫 지점이 끝날 때까지에 포함되는 애들은 넘김
- 만약 다음 지점이 현재 카메라 위치가 커버할 수 없다면? 새로 추가 
*/

int solution(vector<vector<int>> routes) {
    int camera_count = 0;
    int location = -1;
    
    sort(routes.begin(), routes.end(), [](auto &a, auto &b) {
        if (a[1] != b[1]) return a[1] < b[1];
        return a[0] < b[0];
    });
    for (int i = 0; i < routes.size(); i++) {
        int a = routes[i][0];
        int b = routes[i][1];
        if (!(location >= a && location <= b)) { // 범위 안에 카메라가 없음
            camera_count++;
            location = b; // 가장 뒤에 설치
        }
    }
    
    
    return camera_count;
}