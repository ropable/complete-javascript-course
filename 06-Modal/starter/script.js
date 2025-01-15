'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnsShowModal = document.querySelectorAll('.show-modal');
const btnsCloseModal = document.querySelector('.close-modal');

const openModal = function () {
  // console.log(`${btn.textContent} clicked`);
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Attach a event listener for each of the buttons.
btnsShowModal.forEach(function (btn) {
  btn.addEventListener('click', openModal);
});

// Attach an event listener to the close button and to the overlay.
btnsCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Keyboard event listener for closing the modal.
document.addEventListener('keydown', function (e) {
  // console.log(evt.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
