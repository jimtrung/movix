export function ToggleDropdown() {
  const dropDown = document.querySelector('.dropdown');

  document.body.addEventListener('click', () => {
    if (dropDown.classList.contains('visible')) { 
      dropDown.classList.remove('visible');
    }
  });

  document.querySelector('.dropdown-container').addEventListener('click', (event) => { 
    event.stopPropagation();
    dropDown.classList.toggle('visible');
  });
}