#include <string>
#include <vector>
#include <map>
#include <set>
#include <algorithm>

using namespace std;

set<set<string>> s;

void dfs(int target, set<string> &candidate, int idx, vector<vector<string>>& possible_list) {
    if (target == idx) {
        if (candidate.size() == target) s.insert(candidate);
        return;
    }
    
    for (string user: possible_list[idx]) {
        if (candidate.find(user) != candidate.end()) continue;
        candidate.insert(user);
        dfs(target, candidate, idx+1, possible_list);
        candidate.erase(user);
    }
}

int solution(vector<string> user_id, vector<string> banned_id) {
    int N = banned_id.size();
    vector<vector<string>> possible_list(N); 
    
    for (int i = 0; i < N; i++) {
        for (string user: user_id) {
            if (banned_id[i].size() != user.size()) continue;
            
            bool match = true;
            for (int l = 0; l < user.size(); l++) {
                if (banned_id[i][l] != '*' && banned_id[i][l] != user[l]) {
                    match = false;
                    break;
                }
            }
            if (match) possible_list[i].push_back(user);
        }
    }
    
    set<string> candidate;
    dfs(N, candidate, 0, possible_list);
    
    return s.size();
}