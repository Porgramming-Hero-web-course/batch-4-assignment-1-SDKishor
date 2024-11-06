{
  // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

  function sumArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }

  console.log(sumArray([5, 16, 27, 18, 29, 10]));
}