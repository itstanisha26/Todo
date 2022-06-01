'use script';

const inputEl = document.querySelector('.todo__input');
const todoContainer = document.querySelector('.todo__container');
const deleteIcon = document.querySelector('.delete-icon');
const errorMssg = document.querySelector('.error');
const iconDone = document.querySelector('.icon-container--done');

let todoArray = [];

inputEl.addEventListener('keydown', (e) => {
  errorMssg.style.display = 'none';

  let inputValue = inputEl.value;

  if (inputValue !== '' && e.key === 'Enter') {
    const html = `
    <div class="todo__task-container">
          <span class="todo__text"> ${inputValue}</span>

          <div class="icons-container">
            <div class="icon-container icon-container--done">
              <ion-icon name="checkmark-outline" class="icon done-icon">
              </ion-icon>
            </div>
            <div class="icon-container icon-container--delete">
              <ion-icon
                name="trash-outline"
                class="icon delete-icon"
              ></ion-icon>
            </div>
          </div>
        </div>
    `;

    todoContainer.insertAdjacentHTML('beforeend', html);
    inputEl.value = '';
    inputEl.placeholder = 'Not enough! Add another one';
  }

  //
  else if (inputValue === '' && e.key === 'Enter')
    errorMssg.style.display = 'block';
});

// PROBLEMS
// 1) not adding empty string to todo
// 2) not adding already included item
//
