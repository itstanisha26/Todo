'use script';

const inputEl = document.querySelector('.todo__input');
const todoContainer = document.querySelector('.todo__container');
const errorMssg = document.querySelector('.error');
const textEncourage = document.querySelector('.todo__text--encourage');
const todoTaskContainer = document.querySelector('.todo__task-container');

inputEl.addEventListener('keydown', (e) => {
  let inputValue = inputEl.value;
  errorMssg.style.display = 'none';
  textEncourage.style.display = 'none';

  if (inputValue && e.key === 'Enter') {
    const todo = document.createElement('p');

    todo.innerHTML = `
    <div class='todo__task'>
       <span class='todo__text'> ${inputValue}</span>
       <div class='icons-container'>
         <div class='icon-container icon-container--done'>
           <ion-icon name='checkmark-outline' class='icon done-icon'></ion-icon>
         </div>
         <div class='icon-container icon-container--delete'>
           <ion-icon name='trash-outline' class='icon delete-icon'></ion-icon>
         </div>
       </div>
     </div>
`;
    todoTaskContainer.append(todo);

    // Implementing icon functionality
    const deleteIcon = document.querySelectorAll('.delete-icon');
    const iconDone = document.querySelectorAll('.icon-container--done');

    const workTodo = (i) => {
      i.addEventListener('click', (e) => {
        const parent = e.target.closest('.todo__task');
        i.classList.contains('delete-icon')
          ? parent.remove()
          : (parent.style.opacity = 0.4);
      });
    };

    deleteIcon.forEach((i) => workTodo(i));
    iconDone.forEach((i) => workTodo(i));
  }

  // If input is empty
  else if (e.key === 'Enter') errorMssg.style.display = 'block';

  inputEl.value = '';
});
