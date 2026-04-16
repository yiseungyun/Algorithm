#include <string>
#include <vector>
#include <unordered_set>
#include <unordered_map>
#include <deque>

using namespace std;

/*
- 진열대 특정 범위 보석을 모두 구매
    + 진열된 모든 종류 보석을 적어도 1개 이상 포함하는 가장 짧은 구간**
- 1 <= 진열대 보석 <= 10^5
return: 가장 짧은 구간 찾기 [시작 index, 끝 index]

[풀이]
- 보석 개수가 몇 개인지 체크
- 현재 구간에 포함된 보석을 set으로 관리
[의사코드]
left = -1, right = 0
while left < right
    만약 지금 보석 개수가 전체 보석 개수보다 작다? right++
    만약 지금 보석 개수가 전체 보석 개수와 같다? left++
    *진행하며 가장 짧은 구간이 갱신되면 답도 변경
*/

vector<int> solution(vector<string> gems) {
    vector<int> answer = {-1, -1};
    int short_path = gems.size()+1;
    unordered_set<string> gem_set;
    unordered_map<string, int> gem_map;
    
    for (int i = 0; i < gems.size(); i++) {
        gem_set.insert(gems[i]);
    }
    int count_of_gems = gem_set.size();
    
    int left = 0, right = 0;
    
    while (left <= right) {
        if (gem_map.size() == count_of_gems) {
            if (short_path > right-left) {
                short_path = right-left;
                answer[0] = left+1;
                answer[1] = right;
            }
            gem_map[gems[left]]--;
            if (gem_map[gems[left]] == 0) {
                gem_map.erase(gems[left]);
            }
            left++;
        } else if (right == gems.size()) {
            break;
        } else {  
            gem_map[gems[right]]++; 
            right++;
        }
    }
    
    return answer;
}