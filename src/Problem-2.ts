{
  // Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  function removeDuplicates(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (!result.includes(arr[i])) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  console.log(removeDuplicates([5, 16, 5, 27, 18, 18,  29, 10]));
}