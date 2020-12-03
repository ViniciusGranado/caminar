const modal = document.querySelector('.modal');
const imagesPreviews = document.querySelectorAll('img.gallery-image');
const innerModal = document.querySelector('.inner-modal');
const modalImage = document.querySelector('.modal-image');

imagesPreviews.forEach((image) => {
  image.addEventListener('click', () => {
    modal.classList.add('open');
    innerModal.classList.add('open');
    
    // When inner modal transition end
    innerModal.ontransitionend = () => {
      modalImage.classList.add('open');
      
      // Dynamic image
      const imageSource = image.getAttribute('src');
      modalImage.src = imageSource;
    };
  });
});

modal.addEventListener('click', () => {
  innerModal.style.display = 'none';
  modal.classList.remove('open');
  innerModal.classList.remove('open');
  modalImage.classList.remove('open');
  
  modal.ontransitionend = () => {
    innerModal.style.display = 'block';
  };
})
