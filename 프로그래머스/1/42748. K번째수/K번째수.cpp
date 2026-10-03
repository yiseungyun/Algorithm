#include <string>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int>> commands) {
    vector<int> answer;
    
    int iter = commands.size();
    for (int i = 0; i < iter; i++) {
        vector<int> command = commands[i];
        int start = command[0];
        int end = command[1];
        int k = command[2];
        
        vector<int> new_array(array.begin()+start-1, array.begin()+end);
        sort(new_array.begin(), new_array.end());
        answer.push_back(new_array[k-1]);
    }
    
    return answer;
}