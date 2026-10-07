#include <string>
#include <vector>

using namespace std;

void dfs(int node, vector<int> &visited, const vector<vector<int>> &computers) {
    const vector<int> &adj = computers[node];
    visited[node] = 1;
    
    for (int i = 0; i < (int)adj.size(); i++) {
        if (adj[i] == 1 && visited[i] == 0) {
            dfs(i, visited, computers);
        }
    }
}

int solution(int n, vector<vector<int>> computers) { 
    int network = 0;
    vector<int> visited(n, 0); 
    
    for (int i = 0; i < n; i++) {
        if (visited[i] == 0) {
            dfs(i, visited, computers);
            network++;
        }
    }
    
    return network;
}