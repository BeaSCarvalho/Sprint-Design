export default () => {
  const openModal = document.querySelector('[data-modal="open"]');
  const closeModal = document.querySelector('[data-modal="close"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (openModal && closeModal && containerModal) {
    function toggleModal(e) {
      e.preventDefault();
      containerModal.classList.toggle("active-modal");
    }
    function outsideModal(e) {
      if (e.target === this) {
        toggleModal(e);
      }
    }
    openModal.addEventListener("click", toggleModal);
    closeModal.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", outsideModal);
  }
};
