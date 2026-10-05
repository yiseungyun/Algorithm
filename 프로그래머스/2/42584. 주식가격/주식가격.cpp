#include <string>
#include <vector>
#include <stack>
using namespace std;

vector<int> solution(vector<int> prices) {
    stack<int> st;
    // 스택에 가격을 넣는데, 만약 현재 가격이 스택 top보다 작다면?
    // 가격이 떨어진 순간, 이 순간 top은 가격이 떨어진 순간을 만났기에 기간을 기록하고 pop
    // 그 다음 top도 확인해보기 
    int n = (int)prices.size();
    vector<int> period(n, n-1);
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