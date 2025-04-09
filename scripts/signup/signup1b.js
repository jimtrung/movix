import { TogglePassword } from "../passwordToggle.js";
import { ToggleDropdown } from '../dropdown.js';

// ==================== MAIN =======================
TogglePassword();
ToggleDropdown();

document.querySelector('.next-button').addEventListener('click', () => {
  const email = document.querySelector('.email-input').value;
  if (email === "") {
    
  } else {
    localStorage.setItem('email', email);
    window.location.href = 'signup2a.html';
  }
});
