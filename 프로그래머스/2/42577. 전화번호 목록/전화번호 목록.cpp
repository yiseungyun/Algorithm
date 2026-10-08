#include <string>
#include <vector>
#include <algorithm>
#include <unordered_map>

using namespace std;

bool solution(vector<string> phone_book) {
    unordered_map<string, int> um;
    // 한 번호가 다른 번호의 접두어인가?
    
    sort(phone_book.begin(), phone_book.end(), [](const auto &a, const auto &b) {
        return a.size() < b.size();
    });
    um[phone_book[0]] = 1;
    
    for (int i = 1; i < phone_book.size(); i++) {
        string str = "";
        for (int k = 0; k < phone_book[i].size(); k++) {
            str += phone_book[i][k];
            if (um.find(str) != um.end()) {
                return false;
            }
        }
        um[phone_book[i]] = 1;
    }
    
    return true;
}