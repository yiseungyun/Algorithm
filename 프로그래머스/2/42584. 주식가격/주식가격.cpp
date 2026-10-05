#include <string>
#include <vector>
#include <stack>
using namespace std;

vector<int> solution(vector<int> prices) {
    stack<int> st;
    
    int n = (int)prices.size();
    vector<int> period(n, 0);
    st.push(0);
    for (int i = 1; i < n; i++) {
        while (!st.empty()) {
            int idx = st.top();
            if (prices[idx] > prices[i]) {
                period[idx] = i-idx;
                st.pop();
            } else {
                period[i] = n-i-1;
                break;
            }
        }
        st.push(i);
    }
     
    while (!st.empty()) { 
        int idx = st.top();
        period[idx] = n-idx-1;
        st.pop();
    }
     
    return period;
}