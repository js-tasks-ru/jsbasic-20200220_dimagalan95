/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
  let tbody = table.querySelector('tbody');
  let tr = tbody.querySelectorAll('tr');
  i = 1;
  for (let elem of tr) {
    let available = elem.lastElementChild.getAttribute('data-available');
// 1
    if (available === 'true') {
      elem.classList.add('available');
    }
    if (available === 'false') {
      elem.classList.add('unavailable');
    }
    if (!available) {
      elem.setAttribute('hidden', '');

    }
    // elem.setAttribute('hidden', '');
// 2
// 3
    let male = table.rows[i].cells[2].innerHTML;
    if (male === 'm') {
      elem.classList.add('male');
    }
    if (male === 'f') {
      elem.classList.add('female');
    }
    console.log(table.rows[i].cells[2].innerHTML);
// 4
    let age = table.rows[i].cells[1].innerHTML;
    if (age < 18) {
    console.log(age);
      elem.style.textDecoration = 'line-through';
    }
    i++;

}
}

let table = document.querySelector('.js-teachers');

