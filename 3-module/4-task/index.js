/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = [];

  for (let key of users) {
    names.push(key.name);
  }
  return names;
}
