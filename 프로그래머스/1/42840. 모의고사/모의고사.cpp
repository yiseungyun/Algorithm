#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> answers) {
    vector<int> first = {1, 2, 3, 4, 5};
    vector<int> second = {2, 1, 2, 3, 2, 4, 2, 5};
    vector<int> third = {3, 3, 1, 1, 2, 2, 4, 4, 5, 5};
    
    int f_size = first.size();
    int s_size = second.size();
    int t_size = third.size();
    
    int f_count = 0;
    int s_count = 0;
    int t_count = 0;
    vector<pair<int, int>> score_list;
    
    for (int i = 0; i < (int)answers.size(); i++) {
        if (first[(i+f_size)%f_size] == answers[i]) f_count++;
        if (second[(i+s_size)%s_size] == answers[i]) s_count++;
        if (third[(i+t_size)%t_size] == answers[i]) t_count++;
    }
    
    score_list.push_back({f_count, 1});
    score_list.push_back({s_count, 2});
    score_list.push_back({t_count, 3});
    
    sort(score_list.begin(), score_list.end(), greater<pair<int, int>>());
    
    if (score_list[0].first == score_list[1].first && score_list[1].first == score_list[2].first) {
        return {1, 2, 3};
    } else if (score_list[0].first == score_list[1].first) {
        return {score_list[1].second, score_list[0].second};
    } else {
        return {score_list[0].second};
    }
}