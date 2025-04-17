export function ToggleDarkMode() {
  document.querySelector('.toggle').addEventListener(('click'), () => {
    if (localStorage.getItem('dark-mode') === "disabled") {
      localStorage.setItem('dark-mode', "enabled");
    } else {
      localStorage.setItem('dark-mode', "disabled"); 
    }
    document.body.classList.toggle('dark-mode');
  });
}