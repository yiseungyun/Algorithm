#include <string>
#include <vector>
#include <iostream>
#define DIVISOR 1000000007
using namespace std;

/*
- 거스름돈 n원을 주는 경우의 수
- 거슬러줘야 하는 금액 n, 보유하고 있는 돈의 종류 money
- return: n원을 거슬러 줄 방법의 수
- n <= 10^5
- 화폐 단위 100종류 이하
- 화폐는 무한하게 있음
- 답은 큰 수로 나눈 나머지
*/

int solution(int n, vector<int> money) {
    vector<int> DP(n+1, 0);
    DP[0] = 1;
    
    for (auto m: money) {
        for (int i = 1; i <= n; i++) {
            if (i-m >= 0) {
                DP[i] = (DP[i] + (DP[i-m]))%DIVISOR;
            }
        }
    }
    
    return DP[n]%DIVISOR;
}