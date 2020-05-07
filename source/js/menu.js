'use strict';

(function () {
  var TABLET_WIDTH = 768;
  var menuButton = document.querySelector('.header__button-toggle');
  var menu = document.querySelector('.header__nav');
  var menuLinks = menu.querySelectorAll('a');

  menu.classList.remove('header__nav--no-js');
  menuButton.classList.remove('header__button-toggle--no-js');
  menuButton.removeAttribute('aria-hidden');

  menuButton.addEventListener('click', function () {
    menuButton.classList.toggle('header__button-toggle--show');
    menu.classList.toggle('header__nav--show');
  });

  if (window.innerWidth <= TABLET_WIDTH) {
    menuLinks.forEach(function (item) {
      item.addEventListener('click', function () {
        menuButton.classList.toggle('header__button-toggle--show');
        menu.classList.toggle('header__nav--show');
      });
    });
  }
})();
