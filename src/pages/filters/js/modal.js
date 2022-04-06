export default () => {
  const openModal = document.querySelector('[data-modal="open-modal"]');
  const closeModal = document.querySelector('[data-modal="close-modal"]');
  const containerModal = document.querySelector('[data-modal="container"]');


  if (openModal && closeModal && containerModal) {
    let toogle = function (e) {
      e.preventDefault();
      containerModal.classList.toggle("active");
    };
  }  
    let outside = function (e) {
      if (e.target === this) {
        e.preventDefault();
        containerModal.classList.toggle("active");
      }
    };

  openModal.addEventListener("click", toogle);
  closeModal.addEventListener("click", toogle);
  containerModal.addEventListener("click", outside);
}
