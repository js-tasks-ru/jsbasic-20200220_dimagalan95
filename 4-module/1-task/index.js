/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let  ul = document.createElement('ul');
  document.body.append(ul);

    for (let i of friends) {
      let li = document.createElement('li');
      li.innerHTML = i.firstName +' '+ i.lastName;
      ul.append(li);
    }
    return ul;
}
