export function LogOut() {
  document.querySelector('.logout').addEventListener('click', () => {
    localStorage.clear();
  });
}