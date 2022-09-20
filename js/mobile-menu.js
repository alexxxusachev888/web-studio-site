(function () {
  const close = document.querySelector('.mobile-close');
  const modal = document.querySelector('.mobile-menu');
  const modalOpen = document.querySelector('.mobile-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.classList.add('is-open');
    modalOpen.style.display = "none";
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.classList.remove('is-open');
    modalOpen.style.display = "block";
    document.body.overflow = 'initial';
  });
})();