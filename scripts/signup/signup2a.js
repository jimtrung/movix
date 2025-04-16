import { LogOut } from "../utils/logout.js";   

// =============== MAIN ================ //
LogOut();

const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

document.querySelector('.next-button').addEventListener('click', () => {
  window.location.href = 'signup2b.html'; 
});
