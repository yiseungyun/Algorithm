#include <bits/stdc++.h>

using namespace std;

int solution(vector<int> schedules, vector<vector<int>> timelogs, int startday) {
    int answer = 0;
    int n = schedules.size();
    
    for (int i = 0; i < n; i++) {
        int time = schedules[i]+10;
        if (time%100 >= 60) {
            time = ((time/100)+1)*100 + (time%100-60);
        }
        bool flag = true;
        int index = 0;
        for (int day = startday-1; day < startday+6; day++) {
            int current_day = day%7;
            int current = timelogs[i][index++];
            if (current_day == 5 || current_day == 6) continue;
            int current_hour = current/100;
            int time_hour = time/100;
            
            if (current_hour > time_hour) {
                flag = false;
                break;
            } else if (current_hour == time_hour) {
                if (time%100 < current%100) {
                    flag = false;
                    break;
                }
            }
        }
        
        if (flag) answer++;
    }
    
    return answer;
}