'use strict';

(function () {
  var menuButton = document.querySelector('.header__button-toggle');
  var menu = document.querySelector('.header__nav');

  menu.classList.remove('header__nav--no-js');
  menuButton.classList.remove('header__button-toggle--no-js');
  menuButton.removeAttribute('aria-hidden');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('header__button-toggle--show')
    menu.classList.toggle('header__nav--show');
  });
})();
