function arrayReverse(arr) {
  for (let i = 0; i < arr.length / 2; i++) {
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
    return arr;
  }
}

const arr = [1, 2, 5, 9];
console.log(arrayReverse(arr));
