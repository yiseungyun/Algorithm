def solution(k, tangerine):
    count = {}
    for tanger in tangerine:
        if tanger in count:
            count[tanger] += 1
        else:
            count[tanger] = 1
    count_list = list(count.items())
    count_list.sort(key=lambda x:-x[1])
    
    sum = 0
    tanger_count = 0
    for tanger, count in count_list:
        if sum >= k:
            break
        else:
            sum += count
            tanger_count += 1
            
    return tanger_count