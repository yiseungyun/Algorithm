#include <string>
#include <vector>

using namespace std;

int answer = 0; 

void backtrack(int x, int n, vector<int> &c, vector<int> &d1, vector<int> &d2) { 
    if (x == n) {
        answer++;
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (c[col] != 0 || d1[x+col] != 0 || d2[x-col+n-1] != 0) continue;
        c[col] = d1[x+col] = d2[x-col+n-1] = 1;
        backtrack(x+1, n, c, d1, d2);
        c[col] = d1[x+col] = d2[x-col+n-1] = 0;
    }
}

int solution(int n) {
    vector<int> c(n, 0);
    vector<int> d1(2*n-1, 0);
    vector<int> d2(2*n-1, 0);
    
    backtrack(0, n, c, d1, d2);
    
    return answer;
}