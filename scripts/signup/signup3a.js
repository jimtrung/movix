import { LogOut } from "../utils/logout.js";

// =================== MAIN ================== //
LogOut();

const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

document.querySelectorAll('.payment-method').forEach(btn => {
  btn.addEventListener('click', () => { 
    window.location.href = 'signup3b.html';
  });
});