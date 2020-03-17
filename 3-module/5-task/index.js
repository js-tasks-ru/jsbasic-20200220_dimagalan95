/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let newArr = [];

  for (let key of arr) {

    if (key >= a && key <= b) {
      newArr.push(key);
    }
  }
  return newArr;
}
