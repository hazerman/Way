'use strict';

(function () {
  var modalBuy = document.querySelector('.modal--buy');
  var modalSuccess = document.querySelector('.modal--success');
  var overlay = document.querySelector('.overlay');
  var currentModal;
  var currentCloseButton;

  var closeModal = function () {
    currentModal.classList.remove('modal--show');
    document.body.removeAttribute('style');
    overlay.classList.remove('overlay--show');
    document.removeEventListener('keydown', onDocumentEscPress);
    overlay.removeEventListener('click', onOverlayClick);
    currentCloseButton.removeEventListener('click', onCloseButtonClick);
  };

  var onDocumentEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closeModal();
    }
  };

  var onOverlayClick = function () {
    closeModal();
  };

  var onCloseButtonClick = function (evt) {
    evt.preventDefault();
    closeModal();
  };

  var showModal = function (modal) {
    currentModal = modal;
    currentCloseButton = modal.querySelector('.modal__button-close');
    modal.classList.add('modal--show');
    document.body.style.overflow = 'hidden';
    overlay.classList.add('overlay--show');

    document.addEventListener('keydown', onDocumentEscPress);
    overlay.addEventListener('click', onOverlayClick);
    currentCloseButton.addEventListener('click', onCloseButtonClick);

    if (modal === modalBuy) {
      modal.querySelector('input[type=tel]').focus();
    }

  };

  var buyButtons = document.querySelectorAll('a[data-buy]');

  buyButtons.forEach(function (item) {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      showModal(modalBuy);
    });
  });

  document.querySelectorAll('form').forEach(function (item) {
    var inputTel = item.querySelector('input[type=tel]');
    var inputEmail = item.querySelector('input[type=email]');
    inputTel.value = localStorage.getItem('tel');
    inputEmail.value = localStorage.getItem('email');
    item.addEventListener('submit', function (evt) {
      evt.preventDefault();
      localStorage.setItem('tel', inputTel.value);
      localStorage.setItem('email', inputEmail.value);
      if (item.classList.contains('form--modal')) {
        closeModal();
      }
      showModal(modalSuccess);
    });
  });
})();
