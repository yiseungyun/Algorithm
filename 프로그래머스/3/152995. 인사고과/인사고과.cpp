#include <string>
#include <vector>
#include <algorithm>
#include <queue>
#include <iostream>
using namespace std;

/*
- 1년마다 고과 -> 인센티브
- 근무 태도 점수 + 동료 평가 점수
- if 1번이라도 다른 사원(두 점수 모두) > 어떤 사람(두 점수 모두): 인센티브 X
- else 두 점수 합 높은 순으로 석차 -> 인센티브 차등 지급
- 두 점수 합 동일: 동석차, 동석차 수만큼 다음 석차는 건너 뜀*
- scores: {근무 태도 점수, 동료 평가 점수}
- **return: 완호의 석차는? 인센티브 받지 못한다면 -1 반환
- scores 길이 <= 10^5, 점수 <= 10^5

*풀이
- 다른 임의 사원보다 두 점수가 모두 낮은 사원은 인센티브를 못받아서 제외 됨
- 제외 시키려면? 어떤 자료에 저장해서 처리해야하는지? 
- 첫번째 점수를 기준으로 오름차순/두번째 점수를 기준으로 오름차순
- 가장 작은 사람이 뒷사람보다 두번째 점수도 작다면? 제외됨
- *둘 중 하나의 점수라도 커야 살아남음

- 첫번째 사람이 1 점수는 낮으나 뒤에 있는 모든 사람보다 2가 크면 살아남음 / 아니라면 제외
- 두번째 사람이 1 점수가 가장 낮은 상태가 됨 / 뒤 모든 사람보다 2가 크면 살아남음 / 아니라면 제외
-> 직원이 10^5가 최대이므로, 자신 뒤의 사람과 계속 비교하는 로직 N^2로 시간이 초과될 거 같음

+ 둘 중 하나라도 커야 함. 예를 들어 첫번째 점수가 가장 낮은 사람은 두번째 점수가 가장 커야 제외되지 않음.
-> 반면 두번째 점수가 가장 작다면, 첫번째 점수가 가장 높아야 함. 
-> 다른 경우는 첫번째 점수가 2번째로 작다면, 두번째 점수는 첫번째 점수가 나보다 큰 사람보다 다 커야함

- 첫번째 점수 기준 오름차순 정렬
- 첫번째 사람의 두번째 점수가 모든 뒷 사람보다 커야 함** point
- 맨 뒤부터 진행하며 큰 점수를 저장
- 맨 뒷 사람: 첫번째 점수가 가장 큼. 제외 X. 두번째 점수를 저장해둠. -> 이 값이 현재 최대.
- 맨 뒤 2번째: 뒷 사람보다 첫번째 점수 작으니, 최대보다 커야함. 아니라면? 제외/맞다면 최대 갱신.
*/

int solution(vector<vector<int>> scores) { 
    int score = scores[0][0]+scores[0][1];
    int score_1 = scores[0][0];
    int score_2 = scores[0][1];
    sort(scores.begin(), scores.end(), [](vector<int>& a, vector<int>& b) {
        if (a[0] == b[0]) return a[1] < b[1];  
        return a[0] > b[0];  
    }); // 1번째 기준 내림차순/같으면 2번째 기준 오름차순
    int N = scores.size();
    
    int max_second = -1;  
    int rank_result = 1;
    
    // 반복문을 도는데, 두번째 점수는 max_second보다 커야 함
    for (int i = 0; i < N; i++) {
        if (scores[i][1] < max_second) { 
            if (scores[i][0] == score_1 && scores[i][1] == score_2) {
                return -1;
            } 
            continue;
        }
 
        max_second = max(max_second, scores[i][1]);
 
        if (scores[i][0]+scores[i][1] > score) { // 완호보다 점수 높음
            rank_result++;
        }
    }    
    
    return rank_result;
}