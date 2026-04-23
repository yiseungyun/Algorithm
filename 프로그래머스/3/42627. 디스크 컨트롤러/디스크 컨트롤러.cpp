#include <string>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

/*
- 하드디스크: 한 번에 하나의 작업 수행.
- 디스크 컨트롤러 구현: 우  선순위 디스크 컨트롤러.
    - 작업 요청: 번호, 요청 시각, 소요 시간을 저장하는 대기 큐.
    - 하드디스크 작업 X && 대기 큐 O -> 우선순위 높은 작업 꺼내어 하드디스크 작업.
    - 하드디스크는 작업 시작 시 마칠 때까지 그 작업만 수행.
    - 작업 마치는 시점 == 다른 작업 요청이 들어오는 시점. -> 대기큐에 작업 저장 후 꺼내 작업함.
    - 작업 마치는 시점 -> 다른 작업 들어오지 않음. -> 또 다른 작업 시작 가능. (걸리는 시간은 없음.)
**return: 모든 요청 작업의 반환 시간의 평균 정수부분    

**풀이
- 작업 시간을 기준으로 오름차순 정렬
- 현재 시간 = 0으로 시작함. 가장 앞 인덱스의 작업 요청 시각이 현재 시간보다 더 느리면 시간 점프.
- 현재 시간에서 처리할 작업 처리 후 인덱스 옮기기. 
- 처리 후 시간도 처리 완료 시간을 더해줌. 해당 시간보다 요청 시각이 빠른 것은 큐에 넣음.
*/

int solution(vector<vector<int>> jobs) {
    int total_wait = 0;
    int current_time = 0;
    int index = 0;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int, int>>> pq; // {소요 시간, 요청 시간}
    sort(jobs.begin(), jobs.end());

    while (index < jobs.size() || !pq.empty()) {
        while (index < jobs.size() && jobs[index][0] <= current_time) {
            pq.push({jobs[index][1], jobs[index][0]});
            index++;
        }
        
        // 큐에서 우선순위 높은 작업 꺼내서 작업
        // 시간 업데이트
        if (!pq.empty()) {
            auto [end_time, req_time] = pq.top();
            pq.pop();
            current_time += end_time;
            // 끝난 시간 - 요청 시간
            total_wait += (current_time - req_time);
        } else {
            current_time = jobs[index][0];
        }
    }
    
    return (int)(total_wait/jobs.size());
}