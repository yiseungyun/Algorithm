def solution(book_time):
    book_time.sort()
    room = [0]
    
    def change_to_int(string):
        hour, min = string.split(":")
        return int(hour)*60+int(min)
    
    for start, end in book_time: 
        flag = False
        for index, end_time in enumerate(room):
            int_start = change_to_int(start)
            int_end = change_to_int(end)
            if end_time <= int_start:
                room[index] = int_end+10
                flag = True
                break
        if flag == False: room.append(int_end+10)
    
    return len(room)