#include <string>
#include <vector>
#include <algorithm>
using namespace std;

int solution(vector<int> citations) {
    sort(citations.begin(), citations.end(), greater<int>());
    int n = citations.size(); 
    int h_index = 0;
    for (int i = 0; i < n; i++) {
        int h = citations[i]; 
        int count = i+1;
        
        if (h >= count) {
            h_index = max(h_index, count);
        } else {
            return h_index;
        }
    } 
}