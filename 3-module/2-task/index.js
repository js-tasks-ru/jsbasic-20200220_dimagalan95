/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let lol = str.split(',');
  console.log(lol);
  let arr = [];
  let newArr = [];
  for (let key of lol) {
    let a = key.split(' ');

    for (let b of a) {
        arr.push(b);
    }

  }

  for (let key of arr) {
    let keyNext = parseFloat(key);

    if (!keyNext) {
      continue;
    } else {
      newArr.push(keyNext);
    }
  }

  function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  newArr.sort(compareNumeric);

  let result = {};
  result.min = newArr[0];
  result.max = newArr[newArr.length-1];
  return result;
}
