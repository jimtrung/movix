import { LogOut } from "../../data/user.js";   
import { ToggleDropdown } from '../utils/dropdown.js'; 
import { ToggleDarkMode } from "../utils/darkmode.js";

// =============== MAIN ================ //
LogOut();
ToggleDropdown();
ToggleDarkMode();

const email = localStorage.getItem('email');
document.querySelector('.email').innerHTML = email;

document.querySelector('.next-button').addEventListener('click', () => {
  window.location.href = 'signup2b.html'; 
});
