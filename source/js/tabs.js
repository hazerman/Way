'use strict';

(function () {
  var CURRENT_MOD = '--current';
  var tabButtonsArea = document.querySelector('.tabs-menu__tab-list')
  var tabButtons = tabButtonsArea.querySelectorAll('.tabs-menu__tab-link');
  var tabCountries = document.querySelectorAll('.tabs-menu__countries-item');
  var tabReviews = document.querySelectorAll('.reviews__item');
  var countriesLinksArea = document.querySelector('.countries__list');
  var countriesLinks = countriesLinksArea.querySelectorAll('.countries__about-link');
  var currentIndex = 0;

  var changeTab = function (newIndex) {
    tabButtons[currentIndex].classList.remove('tabs-menu__tab-link' + CURRENT_MOD);
    tabCountries[currentIndex].classList.remove('tabs-menu__countries-item' + CURRENT_MOD);
    tabReviews[currentIndex].classList.remove('reviews__item' + CURRENT_MOD);
    tabButtons[newIndex].classList.add('tabs-menu__tab-link' + CURRENT_MOD);
    tabCountries[newIndex].classList.add('tabs-menu__countries-item' + CURRENT_MOD);
    tabReviews[newIndex].classList.add('reviews__item' + CURRENT_MOD);
    currentIndex = newIndex;
  };

  countriesLinksArea.addEventListener('click', function (evt) {
    var target = evt.target.closest('.countries__about-link');
    if (target) {
      var countriesLinksIndex = Array.from(countriesLinks).indexOf(target);
      changeTab(countriesLinksIndex);
    }
  });

  tabButtonsArea.addEventListener('click', function (evt) {
    evt.preventDefault();
    var target = evt.target.closest('.tabs-menu__tab-link');
    if (target) {
      var tabButtonsIndex = Array.from(tabButtons).indexOf(target);
      changeTab(tabButtonsIndex);
    }
  });
})();
