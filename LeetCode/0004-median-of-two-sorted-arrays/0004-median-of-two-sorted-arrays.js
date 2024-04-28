/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var m = nums1.length, n = nums2.length;
    var p1 = 0, p2 = 0;
    if (m === 0) {
        return n % 2 === 0 ? (nums2[Math.floor(n/2)-1]+nums2[Math.floor(n/2)])/2 : nums2[Math.floor(n/2)];
    } else if (n === 0) {
        return m % 2 === 0 ? (nums1[Math.floor(m/2)-1]+nums1[Math.floor(m/2)])/2 : nums1[Math.floor(m/2)];
    }

    function find_min(a, b) {
        if (p1 < nums1.length && p2 < nums2.length) {
            return nums1[p1] < nums2[p2] ? nums1[p1++] : nums2[p2++];
        } else if (p1 < nums1.length) {
            return nums1[p1++];
        } else if (p2 < nums2.length) {
            return nums2[p2++];
        }
        return -1;
    }

    for (let i = 0; i < (m+n)/2-1; i++) {
        find_min(nums1, nums2);
    }
    if ((m+n)%2 === 0) {
        return (find_min(nums1, nums2)+find_min(nums1, nums2))/2
    } else {
        return find_min(nums1, nums2);
    }
};