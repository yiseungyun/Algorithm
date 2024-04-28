class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
        ptr1, ptr2 = 0, 0
        mergedArray = []
        if len(nums1) == 0 or len(nums2) == 0:
            mergedArray = nums1 + nums2
        else:
            while True:
                if nums1[ptr1] > nums2[ptr2]:
                    mergedArray.append(nums2[ptr2])
                    ptr2 += 1
                    if ptr2 == len(nums2):
                        mergedArray += nums1[ptr1:]
                        break
                else:
                    mergedArray.append(nums1[ptr1])
                    ptr1 += 1
                    if ptr1 == len(nums1):
                        mergedArray += nums2[ptr2:]
                        break
        if len(mergedArray) % 2 == 0:
            return (mergedArray[len(mergedArray)//2-1]+mergedArray[len(mergedArray)//2])/2
        else:
            return mergedArray[len(mergedArray)//2]