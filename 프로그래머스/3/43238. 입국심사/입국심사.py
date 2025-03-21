def solution(n, times):
    left = 1
    right = 10**18
    result = 10**18+1
    
    while left <= right:
        mid = (left+right)//2
        count = 0
        for time in times: # 심사 받을 수 있는 사람 수
            count += (mid//time)
        if count < n:
            left = mid+1
        else:
            right = mid-1
            result = min(result, mid)
    
    return result