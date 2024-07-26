// Iterate through the array using two pointers (start and end).
// Swap elements at the start and end pointers.
// Move the start pointer towards the end and the end pointer towards the start until they meet or cross each other.

function reverseArray(arr, start, end) {
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = arr[temp];
    start++;
    end--;
  }
}

var arr = [1, 2, 3, 4, 5, 6];
var n = arr.length;

console.log("Correct Array", arr);

reverseArray(arr, 0, n - 1);

console.log("Reverse Array", arr);
