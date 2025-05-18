export function TogglePassword() {
  document.querySelectorAll('.pw').forEach((pw) => {
    pw.addEventListener('click', () => { 
      const passwordInput = document.querySelector('.password-input');
      if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
      } else {
        passwordInput.type = 'password';
      }
      document.querySelectorAll('.pw').forEach((pw) => {
        pw.classList.toggle('visible');
      });
    });
  });
}