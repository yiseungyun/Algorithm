class Solution:
    def lastRemaining(self, n: int) -> int:
        index = 1
        step = 1
        remaining = n
        left_to_right = True

        while remaining > 1:
            if left_to_right or remaining % 2 == 1:
                index += step
            
            step *= 2
            remaining = remaining//2
            left_to_right = not left_to_right

        return index