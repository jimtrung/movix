import { LogOut } from "../../data/user.js";   
import { ToggleDropdown } from '../utils/dropdown.js'; 
import { ToggleDarkMode } from "../utils/darkmode.js";

// =============== MAIN ================ //
LogOut();
ToggleDropdown();
ToggleDarkMode();

const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

document.querySelectorAll('.payment-method').forEach(btn => {
  btn.addEventListener('click', () => { 
    window.location.href = 'signup3b.html';
  });
});