const Box = document.querySelector('.box');

const btn1 = document.querySelector('#button_1');

const btn2 = document.querySelector('#button_2');

btn1.addEventListener('click', () => {
  Box.classList.remove('dispaly');
});

btn2.addEventListener('click', () => {
  Box.classList.add('dispaly');
});
