#include <string>
#include <vector>
#include <queue>
#include <tuple>
#include <algorithm>
using namespace std;

/*
- n개의 섬 사이 다리를 건설하는 비용: costs
**return: 최소 비용으로 모든 섬이 서로 통행 가능하도록 만들 때 필요한 최소 비용
- 다리 여러번 건너도 도달할 수 있다면 통행 가능함 
*모든 섬이 연결된 상태여야 함(직접적이든 간접적이든)
- 1 <= 섬 개수 <= 100
- costs 길이: ((n-1)*n)/2

**풀이**
- 가장 작은 비용을 택함 -> 이때 연결되어있지 않은걸 연결한다면 가능
- 이미 연결된거라면 연결하지 않음
*직접/간접적으로 연결됨을 어떻게 확인할 수 있는지?
- 연결된 부분에서 부모를 저장함
*/

int get_root(int node, vector<int> &parent) {
    if (parent[node] == -1) return node;
    return parent[node] = get_root(parent[node], parent);
}

int solution(int n, vector<vector<int>> costs) { 
    int max_node = 0;
    int min_cost = 0;
    priority_queue<tuple<int, int, int>, vector<tuple<int, int, int>>, greater<tuple<int, int, int>>> pq;
    
    for (vector<int> cost: costs) {
        int i1 = cost[0], i2 = cost[1];
        int b_cost = cost[2];
        pq.push({b_cost, i1, i2});
    }
    vector<int> parent(n, -1);
    
    while (!pq.empty()) {
        auto [cost, i1, i2] = pq.top();
        pq.pop();
        
        int i1_root = get_root(i1, parent);
        int i2_root = get_root(i2, parent);
        if (i1_root != i2_root) {
            if (i1_root < i2_root) {
                parent[i2_root] = i1_root;
            } else {
                parent[i1_root] = i2_root;
            }
            
            min_cost += cost;
        }
    }
    
    return min_cost;
}