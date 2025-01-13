/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let result = 0;
    let stack = [];

    for (let i = 0; i < height.length; i++) {
        while (stack.length > 0 && height[stack[stack.length-1]] < height[i]) {
            const top = stack.pop();
            if (stack.length === 0) break;
            const width = i-stack[stack.length-1]-1;
            const minHeight = Math.min(height[i], height[stack[stack.length-1]])-height[top];
            result += width*minHeight;
        }
        stack.push(i);
    }

    return result;
};