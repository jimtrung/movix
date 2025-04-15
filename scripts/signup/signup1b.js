import { TogglePassword } from "../utils/passwordToggle.js";
import { ToggleDropdown } from '../utils/dropdown.js';

// ==================== MAIN =======================
TogglePassword();
ToggleDropdown();

document.querySelector('.next-button').addEventListener('click', () => {
  const email = document.querySelector('.email-input').value;
  if (email === "") {
    const noti = document.querySelector('.notification-container');
    noti.classList.toggle('visible');
    document.querySelector('.notification').innerHTML = "Empty password/email";
  } else {
    localStorage.setItem('email', email);
    window.location.href = 'signup2a.html';
  }
});