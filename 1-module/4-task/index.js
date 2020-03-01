/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let a = str.toLowerCase();

  if (a.includes('xxx') || a.includes('1xbet')) {
    return true;
  } else  {
    return false;
  }
}
