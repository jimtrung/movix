export function LogOut() {
  document.querySelectorAll('.logout').forEach(e => {
    e.addEventListener('click', () => {
      localStorage.clear();
    });
  });
}