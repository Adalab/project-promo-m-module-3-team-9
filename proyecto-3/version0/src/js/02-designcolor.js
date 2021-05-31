'use strict';
function changecolor() {
  const selectedButton = document.querySelector('.js-input-design:checked');
  const card = document.querySelector('.js-card');
  card.classList.remove('js-color-2');
  card.classList.remove('js-color-3');

  if (selectedButton.value === '1') {
  } else if (selectedButton.value === '2') {
    card.classList.add('js-color-2');
  } else if (selectedButton.value === '3') {
    card.classList.add('js-color-3');
  }

  userData.palette = parseInt(selectedButton.value);
  localStorage.setItem('user', JSON.stringify(userData));
}

for (let index = 0; index < buttons.length; index++) {
  const button = buttons[index];
  button.addEventListener('click', changecolor);
}
