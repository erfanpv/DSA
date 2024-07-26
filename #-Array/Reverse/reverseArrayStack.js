// Push each element of the array onto a stack.
// Pop elements from the stack to form the reversed array.

function reverseArrayUsingStack(arr) {
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    stack.push(arr[i]);
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = stack.pop();
  }
}

let arr = [1, 2, 3, 4, 5];
reverseArrayUsingStack(arr);
console.log("Reversed Array:", arr);
