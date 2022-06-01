'use script';

const inputEl = document.querySelector('.todo__input');
const todoContainer = document.querySelector('.todo__container');
const errorMssg = document.querySelector('.error');
const textEncourage = document.querySelector('.todo__text--encourage');
const todoTaskContainer = document.querySelector('.todo__task-container');
const h2 = document.querySelector('h2');

const colors = ['#FFD333', '#FF7E44', '#FF4060', '#E52EE5', '#C34CFF'];
const randomColor = () => Math.floor(Math.random() * colors.length);
let todoArray = [];

inputEl.addEventListener('keydown', (e) => {
  let inputValue = inputEl.value;
  errorMssg.style.display = 'none';
  textEncourage.style.display = 'none';

  todoArray.push(inputValue);
  let filteredArray = todoArray.filter((t) => t !== '');

  if (inputValue && e.key === 'Enter') {
    h2.style.display = 'block';
    const todo = document.createElement('p');

    todo.innerHTML = `
    <div class='todo__task' style="background: ${colors[randomColor()]}">
       <span class='todo__text'> ${inputValue}</span>
       <div class='icons-container'>
         <div class='icon-container icon-container--done'>
           <ion-icon name='checkmark-outline' color='black' class='icon done-icon'></ion-icon>
         </div>
         <div class='icon-container icon-container--delete'>
           <ion-icon name='trash-outline' color='black' class='icon delete-icon'></ion-icon>
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

    inputEl.value = '';
  }

  // If input is empty
  else if (e.key === 'Enter') errorMssg.style.display = 'block';
});
