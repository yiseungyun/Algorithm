#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> citations) {
    sort(citations.begin(), citations.end(), greater<int>());
    int n = citations.size(); 
    int h_index = 0;
    for (int i = 0; i < n; i++) {
        int cite = citations[i]; // 인용 수
        int count = i+1; // count = h 후보
        
        if (cite >= count) { 
            h_index = count;
        } else {
            return h_index;
        }
    } 
    
    return h_index;
}