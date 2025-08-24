class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        result = []

        def combFunc(array, index):
            if sum(array) == target:
                result.append(array[:])
                return
            if sum(array) > target:
                return
            
            for i in range(index, len(candidates)):
                num = candidates[i]
                
                array.append(num)
                combFunc(array, i)
                array.pop()
                
        combFunc([], 0)

        return result