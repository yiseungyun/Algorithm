#include <string>
#include <vector>
#include <sstream>
#include <queue>
#include <algorithm>
using namespace std;

/*
- I 숫자: 숫자 삽입
- D 1: 최댓값 삭제
- D -1: 최솟값 삭제

*모든 연산을 처리하고 큐가 비어있으면 [0, 0] return
*큐가 비어있지 않으면 [최댓값, 최솟값] return 
*/

vector<int> solution(vector<string> operations) {
    vector<int> answer;
    vector<int> temp;
    
    for (string oper: operations) {
        stringstream ss(oper);
        string command, number;
        ss >> command >> number;
        
        if (command == "I") {
            temp.push_back(stoi(number));
        } else if (command == "D" && number == "1") {
            if (temp.size() != 0)
                temp.erase(max_element(temp.begin(), temp.end()));
        } else {
            if (temp.size() != 0)
                temp.erase(min_element(temp.begin(), temp.end()));
        }
    }
    
    priority_queue<int, vector<int>, greater<int>> max_q;
    priority_queue<int> min_q;
    
    for (int num: temp) {
        max_q.push(num);
        min_q.push(num);
    }
    
    if (max_q.empty()) {
        answer.push_back(0);
        answer.push_back(0);
    } else {
        int max_value = max_q.top();
        int min_value = min_q.top();
        answer.push_back(min_value);
        answer.push_back(max_value);
    }
    
    return answer;
}