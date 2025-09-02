def solution(n):
    '''
    - 현재 숫자에서 1씩 증가하며, 1의 개수 카운트 하는데 1의 개수가 같으면 중단하고 return
    - n => bin(n): 1의 개수 적어놓기
    '''
    one_count = bin(n).count("1")
    
    for i in range(n+1, 10**6+1):
        current_count = bin(i).count("1")
        if one_count == current_count:
            return i
            