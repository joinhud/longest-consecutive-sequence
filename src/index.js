module.exports = function longestConsecutiveLength(array) {
  // your solution here
  const arrayLength = array.length;
  const set = new Set(array);
  let result = 0;

  for (let i = 0; i < arrayLength; i++) {
    if (!set.has(array[i] - 1)) {
      let j = array[i];

      while (set.has(j)) {
        j++;

        if (result < j - array[i]) {
          result = j - array[i];
        }
      }
    }
  }
  return result;
}
