def solution(stones, k):
    left = 1
    right = max(stones)
    result = right
    
    def check(stones, k): 
        count = 0
        for stone in stones:
            if stone-mid < 0:
                count += 1
            else:
                count = 0
            if count >= k: break
        return count
    
    while left <= right:
        mid = (left+right)//2 
        
        if check(stones, k) >= k: 
            right = mid-1
        else:
            left = mid+1
            result = mid
            
    return result
        
    
    