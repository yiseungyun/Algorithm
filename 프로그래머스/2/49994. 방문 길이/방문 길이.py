def solution(dirs):
    dir = { "U": [0, 1], "D": [0, -1], "R": [-1, 0], "L": [1, 0] }
    current = [0, 0]
    count = 0
    visited_way = {}
    
    for d in dirs:
        dx = dir[d][0]
        dy = dir[d][1]
        new_x = current[0]+dx
        new_y = current[1]+dy
        
        if new_x < -5 or new_x > 5 or new_y < -5 or new_y > 5: continue
        way = [current, [new_x, new_y]]
        way.sort()
        if str(way) not in visited_way:
            visited_way[str(way)] = 1
            count += 1
        current = [new_x, new_y]
    
    return count