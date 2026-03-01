#include <string>
#include <vector>
#include <iostream>
#include <queue>

using namespace std;

/*
- m명 사용자 늘어남 -> 서버 1대 추가
- 어느 시간대 이용자 n*m 이상, (n+1)*m 미만이라면 -> 최소 n대 증설된 서버 운영 중이어야 함
- 증설 서버 -> k시간 동안만 운영 -> 이후 반납
- k = 5일 때 10시에 증설한 서버는 10~15시에만 운영
- **하루동안 모든 게임 이용자가 게임하기 위해 서버를 최소 몇 번 증설해야 하는지?

players 길이 = 24, players[i] = i~i+1시 사이의 게임 이용자 수
-> players: 시간대별 이용자 수
1. i 시간대에 사람이 n명인데 서버가 x대 운영 중 -> 최소대로 운영되는지?
    - 현재 사람 수/m대 운영 중이어야 함
    - 만약 아니라면 차이만큼 증설
2. 현재 서버가 얼마나 운영 중인지 어떻게 관리?
    - 서버가 언제 증설되었는지 저장해야 함 -> 증설 시간 + k만큼 운영 됨
    - 현재 증설할 때 마지막 시간을 저장: 현재 시간+k
    - 현재 서버가 유효한지? 가장 작은 숫자 확인 후 지금 시간보다 작은 서버 없앰
    - 최소 힙으로 관리 -> 최소 힙 크기 == 서버 개수
1 <= m <= 1000
1 <= k <= 24
*/

int solution(vector<int> players, int m, int k) {
    int count = 0;
    queue<int> servers;
    
    for (int i = 0; i < 24; i++) {
        int people = players[i];
        
        while (!servers.empty() && servers.front() <= i) servers.pop();
        
        while ((int)(people/m) > servers.size()) { // 증설
            servers.push(i+k);
            count++;
        }
    }
    
    return count;
}