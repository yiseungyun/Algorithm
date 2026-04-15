#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/*
- N개의 스티커가 원형으로 연결됨
- 몇 장 스티커를 뜯어 적힌 숫자 합이 최대가 되도록 해야 함
- 한장 뜯으면 양쪽 인접 스티커는 찢어져 사용할 수 없음**
**return: 스티커를 뜯어내어 얻을 수 있는 숫자 합의 최댓값
1 <= 스티커 <= 100000, 1 <= 숫자 <= 100
[풀이]
- 항상 큰 값을 먼저 선택한다고 합이 최대가 되는 것은 아님
- DP로 값을 메모이제이션 해야함 -> 현재 값을 선택했을 때/안했을 때
*/

int solution(vector<int> sticker) {
    int N = sticker.size();
    if (N == 1) return sticker[0];
    vector<int> DP1(N, 0);
    vector<int> DP2(N, 0);
    // 첫번째 스티커 선택한 경우: 마지막 선택 불가
    DP1[0] = sticker[0]; DP1[1] = sticker[0];
    for (int i = 2; i < N-1; i++) {
        DP1[i] = max(DP1[(N+i-2)%N]+sticker[i], DP1[(N+i-1)%N]);
    }
    
    // 두번째 스티커부터 선택한 경우: 마지막 선택 가능
    DP2[0] = 0; DP2[1] = sticker[1];
    for (int i = 2; i < N; i++) {
        DP2[i] = max(DP2[(N+i-2)%N]+sticker[i], DP2[(N+i-1)%N]);
    }
    
    return max(DP1[N-2], DP2[N-1]);
}