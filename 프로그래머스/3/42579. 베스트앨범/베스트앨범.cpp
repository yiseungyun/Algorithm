#include <string>
#include <vector>
#include <unordered_map>
#include <algorithm>
#include <queue>
using namespace std;

/*
- 장르별로 가장 많이 재생된 노래 2개씩 모아 베스트 앨범 출시
- 노래: 고유 번호로 구분
- 수록 기준
    1. 속한 노래가 가장 많이 재생된 장르 먼저 수록
    2. 장르 내 가장 많이 재생된 노래 수록
    3. 장르 내 재생횟수가 같으면 고유 번호가 낮은 노래 수록
- 1 <= genres < 100: 노래 장르
- plays: 노래별 재생횟수
**return: 베스트 앨범에 들어갈 노래의 고유 번호 순서대로
*/

struct Compare {
    bool operator()(const pair<int, int>& a, const pair<int, int>& b) {
        // 1순위: 첫 번째 요소(재생 횟수) 내림차순 (큰 게 위로)
        if (a.first != b.first) {
            return a.first < b.first; // b.first가 더 크면 true -> b가 위로
        }
        // 2순위: 두 번째 요소(고유 번호) 오름차순 (작은 게 위로)
        return a.second > b.second; // b.second가 더 작으면 true -> b가 위로
    }
};

vector<int> solution(vector<string> genres, vector<int> plays) {
    vector<int> best_album;
    unordered_map<string, int> m;
    
    for (int i = 0; i < genres.size(); i++) {
        if (m.find(genres[i]) == m.end()) {
            m.insert({genres[i], plays[i]});
        } else {
            m[genres[i]] += plays[i];
        }
    }
    
    vector<pair<string, int>> genres_vector(m.begin(), m.end());
    sort(genres_vector.begin(), genres_vector.end(), [](const auto& a, const auto& b) {
        return a.second > b.second; 
    });
    
    unordered_map<string, priority_queue<pair<int, int>, vector<pair<int, int>>, Compare>> best_m; // 재생 횟수, 고유 번호
    for (int i = 0; i < genres.size(); i++) {
        best_m[genres[i]].push({plays[i], i});
    }
    
    for (int i = 0; i < genres_vector.size(); i++) {
        auto [genre, total] = genres_vector[i];
        auto [play, index] = best_m[genre].top();
        best_m[genre].pop();
        best_album.push_back(index);
        if (!best_m[genre].empty()) {
            auto [play, index] = best_m[genre].top();
            best_m[genre].pop();
            best_album.push_back(index);
        }
    }
    
    return best_album;
}