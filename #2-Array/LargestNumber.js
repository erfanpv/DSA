function print3Largest(arr, arrSize) {
  if (arrSize < 3) {
    return "Invalid input";
  }

  let first, second, third;
  first = second = third = Number.MIN_VALUE;
  for (let i = 0; i < arrSize; i++) {
    if (arr[i] > first) {
      third = second;
      second = first;
      first = arr[i];
    } else if (arr[i] > second) {
      third = second;
      second = arr[i];
    } else if (arr[i] > third) {
      third = arr[i];
    }
  }

  console.log(first, second, third);
}

let arr = [12, 13, 1, 10, 34, 1];
let n = arr.length;
print3Largest(arr, n);
