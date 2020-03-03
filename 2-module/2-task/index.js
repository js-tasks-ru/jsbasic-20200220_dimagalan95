/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */
function isEmpty(obj) {
  let sum = 0;

  for (let key in obj) {

    if (key) {
      sum++;
    }
  }

  if (sum === 0) {
    return true;
  } else {
    return false;
  }
}
