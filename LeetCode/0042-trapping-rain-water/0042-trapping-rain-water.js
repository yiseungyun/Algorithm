/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let left = 0, right = height.length-1;
    let leftMax = height[left], rightMax = height[right];

    while (left <= right) {
        if (leftMax < rightMax) {
            result += (leftMax-height[left] > 0 ? leftMax-height[left] : 0);
            left++;
            leftMax = leftMax < height[left] ? height[left] : leftMax; 
        } else {
            result += (rightMax-height[right] > 0 ? rightMax-height[right] : 0);
            right--;
            rightMax = rightMax < height[right] ? height[right] : rightMax; 
        }
    }

    return result;
};