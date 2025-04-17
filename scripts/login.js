import { Login } from "../data/user.js";
import { TogglePassword } from "./utils/passwordToggle.js"; 

// ============================ MAIN ===============================
TogglePassword();

document.querySelector('.login-button').addEventListener('click', () => {
  const email = document.querySelector('.email-input').value;
  const password = document.querySelector('.password-input').value;
  console.log(email + " " + password);

  try {
    Login(email, password);
  } catch (e) {
    alert(e);
  }
});