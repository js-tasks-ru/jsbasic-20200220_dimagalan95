/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  let newStr = '';
  let a = 0;

  for (let i=0; i<str.length; i++)  {
    let symbol = str[i];

    if (symbol ===' ' && a===0) {
      continue;
    }

    if (a===0) {
      a++;
      symbol = str[i].toUpperCase();
    }
     newStr = newStr + symbol;
  }
  return newStr;
}

