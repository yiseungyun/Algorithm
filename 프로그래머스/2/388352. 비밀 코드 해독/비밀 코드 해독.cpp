#include <string>
#include <vector>
#include <algorithm>
using namespace std;

/*
- 1~n까지 서로 다른 5개의 수: 오름차순**
- m번 시도 = q의 길이 (q: 시도한 리스트)
- ans = 실제 암호
*/
vector<vector<int>> path;

void backtrack(int start, int n, vector<int> current) {
    if (current.size() == 5) {
        path.push_back(current);
        return;
    }
    for (int i = start; i <= n; i++) {
        current.push_back(i);
        backtrack(i+1, n, current);
        current.pop_back();
    }
}

int solution(int n, vector<vector<int>> q, vector<int> ans) {
    // 1. 정수 5개 오름차순으로 만들기 - 5중 for문? 
    // 2. 해당 배열이 q에 있는 조건과 맞는지 검사하고 하나라도 아니라면, 다음으로
    // 3. 위 과정을 반복하면서 만족하는 것은 카운팅
    vector<int> current;
    backtrack(1, n, current);
    int 가능한경우 = 0;
    
    for (auto 후보: path) {
        bool 가능 = true;
        for (int i = 0; i < q.size(); i++) {
            int count = 0;
            for (int j = 0; j < 5; j++) {
                if (find(후보.begin(), 후보.end(), q[i][j]) != 후보.end()) {
                    count++;
                }
            }
            if (count != ans[i]) {
                가능 = false;
                break;
            }
        } 
        
        if (가능) 가능한경우++;
    }
    
    return 가능한경우;
}