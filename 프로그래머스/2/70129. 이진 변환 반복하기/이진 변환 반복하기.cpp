#include <string>
#include <vector> 
#include <algorithm>
#include <bitset> 

using namespace std;

vector<int> solution(string s) {
    vector<int> answer;
    int transition_count = 0;
    int zero_count = 0; 
    int prev_len = 0, curr_len = 0;
    
    while (s != "1") {
        prev_len = s.size();
        s.erase(remove(s.begin(), s.end(), '0'), s.end());
        curr_len = s.size();

        zero_count += (prev_len-curr_len);  

        string new_s = bitset<18>(curr_len).to_string();
        s = new_s.substr(new_s.find('1'));

        transition_count++;
    }
    
    answer.push_back(transition_count);
    answer.push_back(zero_count);
    return answer;
}