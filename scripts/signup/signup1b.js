import { TogglePassword } from "../utils/passwordToggle.js";
import { ToggleDropdown } from '../utils/dropdown.js';
import { ToggleDarkMode } from "../utils/darkmode.js";
import { Signup } from "../../data/user.js";

// ==================== MAIN =======================
TogglePassword();
ToggleDropdown();
ToggleDarkMode();
 
document.querySelector('.next-button').addEventListener('click', () => {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;

  try {
    Signup(email, password);
  } catch (e) {
    alert(e)
  }
});