#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> priorities, int location) {
    queue<pair<int, int>> q; // {우선순위, 위치}
    priority_queue<int> pq;
    
    int process_size = (int)priorities.size();
    for (int i = 0; i < process_size; i++) {
        q.push({priorities[i], i});
        pq.push(priorities[i]);
    }
    
    int order = 0;
    
    while (!q.empty()) {
        auto [p, idx] = q.front();
        q.pop();
        
        if (p < pq.top()) { // 우선순위 높은 애가 있음
            q.push({p, idx});
            continue;
        }
        
        // 제일 우선순위가 높음
        pq.pop();
        order++;
        if (idx == location) {
            return order;
        }
    }
    
    return -1;
}