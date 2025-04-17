window.addEventListener('load', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

if (localStorage.getItem('dark-mode') === "enabled") {
  document.body.classList.add('dark-mode');
}