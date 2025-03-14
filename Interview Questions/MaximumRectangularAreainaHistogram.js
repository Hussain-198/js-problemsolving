function maxRectArea(heights) {
    let stack = [];
    let maxArea = 0;
    let h;
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            h = heights[stack.pop()];
            console.log(h);
            let width = stack.length == 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, h * width);
        }
        stack.push(i);
    }
    
    return maxArea
}
console.log(maxRectArea([2, 1, 5, 6, 2, 3]));

