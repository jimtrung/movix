document.querySelector('.dropdown-container').addEventListener('click', () => {
  const dropDown = document.querySelector('.dropdown');
  if (dropDown.classList.contains('visible')) {
    dropDown.classList.remove('visible');
  } else {
    dropDown.classList.add('visible');
  }
});