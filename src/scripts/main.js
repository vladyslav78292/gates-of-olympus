'use strict';

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const menu = dropdown.querySelector('.menu');
  const options = dropdown.querySelectorAll('.menu li');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    menu.classList.toggle('menu-open');
  });

  options.forEach(option => {
    option.addEventListener('click', () => {
      select.classList.remove('select-clicked');
      menu.classList.remove('menu-open');
    });
  });
});

const game_open = document.querySelector('.play_button');
const game = document.querySelector('.game_container');
const body = document.querySelector('.body');
const close = document.querySelector('.button_close');

close.addEventListener('click', () => {
  game.classList.remove('game_open');
  body.classList.remove('hidden');
});

game_open.addEventListener('click', () => {
  game.classList.add('game_open');
  body.classList.add('hidden');
});
