class Solution:
    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool: 
        keys = [False for _ in range(len(rooms))]
        keys[0] = True
        stack = [0]
 
        while len(stack) > 0: 
            next_room = stack.pop()
            for key in rooms[next_room]:
                if not keys[key]:
                    stack.append(key)
                    keys[key] = True

        for key in keys:
            if key == False:
                return False
        return True