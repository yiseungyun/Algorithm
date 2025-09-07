import math 

def solution(n, stations, w):
    answer = 0
    
    prev_loc = 1
    for station in stations:
        not_received = station-w-1
        
        if not_received - prev_loc >= 0:
            dist = not_received - prev_loc + 1
            answer += math.ceil(dist/(2*w+1)) 
        prev_loc = station+w+1
    
    if prev_loc <= n:
        dist = n - prev_loc + 1
        answer += math.ceil(dist/(2*w+1)) 
        
    return answer