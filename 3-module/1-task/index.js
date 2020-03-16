/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let string = ``;

  for (let key of data) {

      if (key.age <= age) {
          string += `${key.name}, ${key.balance}\n`;
      }
  }
  return(string.slice(0,-1));
}
