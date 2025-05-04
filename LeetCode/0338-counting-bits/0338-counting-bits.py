class Solution:
    def countBits(self, n: int) -> List[int]:
        result = []

        for i in range(n+1):
            count = 0
            binary = format(i, 'b')
            for b in str(binary):
                if b == '1':
                    count += 1
            result.append(count)

        return result