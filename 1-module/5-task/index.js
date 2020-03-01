/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  let newStr = '';

  if (str.length > maxlength) {

    for(let i=0; i<maxlength-1; i++) {
      let symbol = str[i];
      newStr += symbol;
    }
    return newStr + "…";
  } else {
    return str;
  }
}
