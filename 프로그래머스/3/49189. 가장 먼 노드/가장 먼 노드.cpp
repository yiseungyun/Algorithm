#include <string>
#include <vector>
#include <queue>
using namespace std;

const int INF = 1e9;

/*
- n개의 노드
- **return: 1번 노드에서 가장 멀리 떨어진 노드의 갯수 
- 가장 멀리 떨어진 = 최단 경로로 이동했는데, 간선 개수가 가장 많은 노드
-> 1번 노드를 시작으로 최단 거리를 구하는데 이동한 간선 개수도 저장해야 함
*/

int solution(int n, vector<vector<int>> edge) {
    vector<vector<int>> graph(n+1);
    vector<int> edge_count(n+1, 0);
    vector<int> visited(n+1, 0);
    for (auto e: edge) {
        int a = e[0], b = e[1];
        graph[a].push_back(b);
        graph[b].push_back(a);
    }
    
    vector<int> dist(n+1, INF);
    queue<pair<int, int>> q;
    q.push({1, 0}); // 정점, count
    visited[1] = 1;
    
    int max_count = 0;
    int node_count = 0;
    
    while (q.size() > 0) {
        auto [node, count] = q.front();
        q.pop();
        for (int adj: graph[node]) {
            if (visited[adj] == 0) {
                q.push({adj, count+1});
                visited[adj] = 1;
                edge_count[adj] = count+1;
                
                if (max_count < count+1) {
                    max_count = count+1;
                }
            }
        }
    }
    
    for (int i = 2; i <= n; i++) {
        if (edge_count[i] == max_count) {
            node_count++;
        }
    }
    
    return node_count;
}