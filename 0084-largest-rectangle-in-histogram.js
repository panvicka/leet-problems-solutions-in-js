/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  let maxArea = 0;
  let stack = [
    {
      start: 0,
      height: heights[0]
    }
  ]
  console.log(`initialized stack to:`)
  console.log(stack)


  for (let i = 1; i < heights.length; i++) {
    console.log(`element ${i} with height ${heights[i]}, init startIndex to ${i}`)
    let startIndex = i;

    console.log(`top of my stack `);
    let topOfStack = stack[stack.length - 1];
    console.log(topOfStack);

    while (stack.length > 0 && stack[stack.length - 1].height > heights[i]) {
      console.log(`need poping, stack[stack.length - 1].height ${stack[stack.length - 1].height} > heights[${i}] ${heights[i]}`)
      let popedStackElement = stack.pop();
      console.log(`popped:`)
      console.log(popedStackElement)
      let maximumCreatableArea = popedStackElement.height * (i - popedStackElement.start)
      console.log(`max area ${maximumCreatableArea}`)

      if (maximumCreatableArea > maxArea) {
        maxArea = maximumCreatableArea;
      }
      startIndex = popedStackElement.start


    }
    stack.push({ start: startIndex, height: heights[i] })
    console.log(`pushing new to stack`)
    console.log(stack)
  }

  console.log(`stack after for loop`);
  console.log(stack);

  for (let i = 0; i < stack.length; i++) {
    const maxPosArea = stack[i].height * (heights.length - stack[i].start);
    console.log(`this element spannning whole width:`)
    console.log(stack[i])
    console.log(`takes area of ${maxPosArea}`);
    if (maxPosArea > maxArea) {
      maxArea = maxPosArea;
    }
  }

  return maxArea;

};

const heights = [2, 1, 5, 6, 2, 3]
console.log(largestRectangleArea(heights));