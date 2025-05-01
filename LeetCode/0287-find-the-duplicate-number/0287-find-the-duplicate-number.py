class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        duplicate_dict = {}
        for num in nums:
            if num not in duplicate_dict:
                duplicate_dict[num] = 1
            else:
                return num