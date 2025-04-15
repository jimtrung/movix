// =================== MAIN ================== //
const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

document.querySelectorAll('.pack-container').forEach((pack) => {
  pack.addEventListener('click', () => {
    document.querySelectorAll('.picked-icon').forEach((icon) => {  
      icon.classList.add('invisible'); 
    });
    const type = pack.dataset.pack;
    document.querySelector(`.${type}-icon`).classList.remove('invisible');
  });
});

document.querySelector('.next-button').addEventListener('click', () => {
  window.location.href = 'signup3a.html';
});