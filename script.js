'use script';

const inputEl = document.querySelector('.todo__input');
const textEncourage = document.querySelector('.todo__text--encourage');
const todoTaskContainer = document.querySelector('.todo__task-container');
const h2 = document.querySelector('h2');
const addIcon = document.querySelector('.icon-container--add');
const todoContainer = document.querySelector('.todo__container');

const colors = ['#FFD333', '#FF7E44', '#FF4060', '#E52EE5', '#C34CFF'];
const randomColor = () => Math.floor(Math.random() * colors.length);
let todoArray = [];

inputEl.addEventListener('keydown', (e) => {
  let inputValue = inputEl.value.toLowerCase();

  if (!inputValue) return;
  textEncourage.style.display = 'none';

  if (inputValue && e.key === 'Enter') {
    todoArray.push(inputValue);
    e.preventDefault();

    h2.style.display = 'block';

    const todo = `
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
    todoTaskContainer.insertAdjacentHTML('beforebegin', todo);

    // Implementing icon functionality
    const deleteIcon = document.querySelectorAll('.delete-icon');
    const iconDone = document.querySelectorAll('.done-icon');

    todoArray.forEach((a, i) => {
      deleteIcon[i].addEventListener('click', (e) => {
        const parent = e.target.closest('.todo__task');
        parent.remove();
        todoArray = todoArray.filter((t) => t !== a);
        if (todoArray.length === 0) {
          textEncourage.style.display = 'block';
          h2.style.display = 'none';
        }
      });
    });

    iconDone.forEach((i) => {
      i.addEventListener('click', (e) => {
        const parent = e.target.closest('.todo__task');
        parent.style.opacity = 0.4;
      });
    });
    inputEl.value = '';
  }
});
