/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
 *
 * @constructor
 */
class ClearedTable {
  constructor(data) {
    this.el = document.createElement('table');
    this.data = data;

    this.render();
    this.addContent(data);
    this.removeRow(data);
  }

  removeRow(data) {
    this.el.addEventListener('click', event => {
      const { target } = event;
      let id;

      if (target.tagName != 'A') return;

      for (let key of data) {
        id = key.id;

        for (let index in key) {
          if(key[index] === id) {
            let element = target.closest('tr');
            element.remove();
          }
        }
      }

      this.onRemoved(id);
    })
  }

  render() {
    let thead = document.createElement('thead');
    let tr = document.createElement('tr');
    this.el.setAttribute('class', 'pure-table');

    for (let i = 0; i < 6; i++) {
      let td = document.createElement('td');

      if (i === 0) {
        td.innerHTML = 'Id';
      }

      if (i === 1) {
        td.innerHTML = 'Name';
      }

      if (i === 2) {
        td.innerHTML = 'Age';
      }

      if (i === 3) {
        td.innerHTML = 'Salary';
      }

      if (i === 4) {
        td.innerHTML = 'City';
      }

      if (i === 5) {
        td.innerHTML = '';
      }

      tr.appendChild(td);
    }

    thead.appendChild(tr);
    this.el.appendChild(thead);
  }

  addContent(data) {
    let tbody = document.createElement('tbody');

    for (let key of data) {
      let tr = document.createElement('tr');

      for (let index in key) {
        let td = document.createElement('td');
        td.innerHTML = key[index];

        tr.appendChild(td);
      }

      let newCell = tr.insertCell(5);
      let newText = document.createTextNode('X');
      let link = document.createElement('a');

      newCell.appendChild(link);
      link.setAttribute("href", "#delete");
      link.appendChild(newText);

      tbody.appendChild(tr);
    }

    this.el.appendChild(tbody);
  }

  /**
   * Метод который вызывается после удалении строки
   * @param {number} id - идентификатор удаляемого пользователя
   */
  onRemoved(id) {
    this.id = id;
  }
}
