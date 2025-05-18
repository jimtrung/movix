import { ToggleDropdown } from '../utils/dropdown.js'; 
import { ToggleDarkMode } from "../utils/darkmode.js";

// ============== MAIN ================ //
ToggleDropdown();
ToggleDarkMode();

document.querySelector('.next-button').addEventListener('click', () => {
  window.location.href = 'signup1b.html'; 
});