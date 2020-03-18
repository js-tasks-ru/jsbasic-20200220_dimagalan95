/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  let newStr = '';
  if (str == '') {
    return newStr;
  } else {
  let lol = str.split('-');

  if (lol[0] === '') { lol.shift() }
  let j = 0;
  let b = str.indexOf('-');

  if (b !== 0) {
      j = 1;
      newStr = lol[0];
  }

  for ( j; j < lol.length; j++ ) {
    let a = lol[j];
    newStr += a[0].toUpperCase();

    for (let i=1; i < a.length; i++) {
      newStr += a[i];
    }
}
return newStr;
  }
}
