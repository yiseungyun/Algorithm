#include <vector>
#include <iostream>
using namespace std;

int solution(vector<int> nums) {
    // nums에서 3개의 수를 뽑아 소수가 되는지/안되는지 판별
    int count = 0;
    const int MAX = 3000; // 3개의 수의 최대 합
    vector<bool> prime(MAX+1, true);
    prime[0] = prime[1] = false;
    for (int i = 2; i*i <= MAX; ++i) {
        if (prime[i]) {
            for (int j = i*i; j <= MAX; j += i) prime[j] = false;
        }
    }
    
    for (int i = 0; i < (int)nums.size(); i++) {
        for (int j = i+1; j < (int)nums.size(); j++) {
            for (int k = j+1; k < (int)nums.size(); k++) {
               if (prime[nums[i]+nums[j]+nums[k]]) count++;
            }
        }
    }
    
    return count;
}