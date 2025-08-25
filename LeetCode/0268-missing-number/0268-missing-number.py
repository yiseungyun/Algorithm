class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        range_sum = sum([n for n in range(max(nums)+1)])
        current_sum = sum(nums)

        if range_sum-current_sum == 0 and 0 in nums:
            return max(nums)+1
        else:
            return range_sum-current_sum