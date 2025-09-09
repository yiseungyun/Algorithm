from collections import deque

def solution(begin, target, words):
    if target not in words: return 0
    
    def count_change(first, second):
        diff_count = 0
        for i in range(len(first)):
            if first[i] != second[i]:
                diff_count += 1
        return diff_count
    
    queue = deque()
    queue.append([begin, 0])
    
    while len(queue):
        now, count = queue.popleft()
        
        if now == target: 
            return count
        
        for word in words:
            current_count = count_change(now, word)
            if current_count == 1:
                queue.append([word, count+1])
            
        