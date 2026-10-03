#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> people, int limit) {
    int boat = 0;
    sort(people.begin(), people.end());
    
    int r = (int)people.size()-1;
    int l = 0;
    
    while (l <= r) {
        if (people[r] + people[l] <= limit) {
            boat++;
            r--;
            l++;
        } else {
            boat++;
            r--;
        }
    }
    
    return boat;
}