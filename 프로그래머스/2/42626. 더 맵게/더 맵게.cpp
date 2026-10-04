#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(vector<int> scoville, int K) {
    priority_queue<int, vector<int>, greater<int>> food;
    int mix_count = 0;
    for (int i = 0; i < (int)scoville.size(); i++) {
        food.push(scoville[i]);
    }
    
    while (food.size() >= 2) {
        int first = food.top();
        food.pop();
        if (first >= K) return mix_count;
        int second = food.top();
        food.pop();
        int new_k = first + second*2;
        food.push(new_k);
        mix_count++;
    }
    
    int first = food.top();
    if (first < K) return -1;
    
    return mix_count;
}