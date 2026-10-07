#include <string>
#include <vector>

using namespace std;

int target_count = 0;

void dfs(int index, vector<int> &numbers, int target, int sum) {
    if (index == (int)numbers.size()) {
        if (sum == target) target_count++;
        return;
    }
    
    dfs(index+1, numbers, target, sum+numbers[index]);
    dfs(index+1, numbers, target, sum-numbers[index]);
}

int solution(vector<int> numbers, int target) {
    // 타겟 넘버를 만드는 방법의 수
    dfs(0, numbers, target, 0);
    
    return target_count;
}